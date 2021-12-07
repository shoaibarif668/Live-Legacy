//Get All Users && Show User's List On Admin Dashboard
let tableData = "" //Table Data To be mapped to html

const getAllUsers = () =>{
    axios
    .get(`${baseUrl}/api/user`,"",{headers: {'x-access-token': `${auth}`}})
    .then((response)=>{
        if(response.status === 200){
            for (let i=0;i<response.data.data.length;i++){
                    let data = response.data.data[i]
                    
                    tableData+="<tr>";
                        tableData += "<td>" + data.firstName + " " + data.lastName + "</td>";
                        tableData += "<td>" + data.email + "</td>";
                        tableData += "<td>" + data.phoneNumber + "</td>";
                        tableData += "<td>" + data.createdAt.split("T")[0] + "</td>";
                        tableData += "<td>" + `<button onclick=deleteConfirmation("${data._id}") data-toggle="modal" data-target="#userConfirmation">` + "DELETE USER" + "</button>" + "</td>";
                        tableData += "<td>" + `<button onclick=copyGallery("${data._id}")>` + "GALLERY LINK" + "</button>" + "</td>";
                    tableData += "</tr>";
            }
            $('#user__table__body').append(tableData); //tbody where the data is appended
        }
    })
    .catch((error)=>{
        if(error.response.status === 401 || error.response.status === 403){
            localStorage.clear();
            window.location = "../admin-login.html"
        }
    })
}
getAllUsers();

//Delete Confirmation Modal
const deleteConfirmation = (id) =>{
    deleteBtn="";
    $("#user__delete__btn").empty();
    
    deleteBtn+=`<button type="button" class="btn btn-danger" onclick="deleteuser('${id}')">DELETE</button>`

    $('#user__delete__btn').append(deleteBtn)
}

//Function To Delete A User
const deleteuser = (id) => {
    axios
    .post(`${baseUrl}/api/admin/user-management/delete-user/${id}`,"",{headers: {'x-access-token': `${auth}`}})
    .then((response)=>{
        if(response.status===200){
            toast__body.innerHTML = response.data.message;
            setTimeout(()=>{
                $('#success__toast').toast({ delay: 1000 })
                $('#success__toast').toast('show')
            },100)
            setTimeout(()=>{
                location.reload();
            },1000)
        }
    })
    .catch((error)=>{
        if(error.response.status === 401 || error.response.status === 403){
            localStorage.clear();
            window.location = "../admin-login.html"
        }
    })
}

//Copy Gallery Link
let toast__body = document.getElementById("toast__body");
const copyGallery = (id) => {
    navigator.clipboard.writeText(`live-legacy.com/gallery.html?user=${id}`)
    toast__body.innerHTML = "Gallery Link Successfully Copied";
    $('#success__toast').toast('show')
}