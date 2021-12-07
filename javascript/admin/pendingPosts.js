//Get All Posts
let postData = "" //Table Data To be mapped to html
let photoEndPoint = `${baseUrl}/api/user/uploads/all-photos`;
let videosEndPoint = `${baseUrl}/api/user/uploads/all-videos`;
let statusEndPoint = `${baseUrl}/api/user/uploads/all-status`;

const requestOne = axios.get(photoEndPoint,"",{headers: {'x-access-token': `${auth}`}});
const requestTwo = axios.get(videosEndPoint,"",{headers: {'x-access-token': `${auth}`}});
const requestThree = axios.get(statusEndPoint,"",{headers: {'x-access-token': `${auth}`}});

const getAllPosts = () =>{
    axios
    .all([requestOne, requestTwo,requestThree])
    .then(axios.spread((...response)=>{
        if(response[0].status === 200 && response[1].status === 200 && response[2].status === 200){
            //Photos Loop
            for (let i=0;i<response[0].data.data.length;i++){
                
                if(response[0].data.data[i].photo.status==="Pending"){
                    let data = response[0].data.data[i]
                    let picCaption = JSON.stringify(data.photo.caption).replace(/['"]+/g, '')
                    postData+="<tr>";
                        postData += "<td>" + data.user.firstName + " " + data.user.lastName + "</td>";
                        postData += "<td>" + `<button onclick='setImageOnModal("${data.photo.imageName}","${picCaption}")' data-toggle="modal" data-target="#postModal">` + "<i class='uil uil-eye'></i>" + "</button>" + "</td>";
                        postData += "<td>" + data.photo.createdAt.split("T")[0] + "</td>";
                        postData += "<td>" + `<button onclick=updatePostStatus("${data.photo._id}","Approved")>` + "Approve" + "</button>" + "</td>";
                        postData += "<td>" + `<button onclick=updatePostStatus("${data.photo._id}","Declined")>` + "Decline" + "</button>" + "</td>";
                    postData += "</tr>";
                }
            }
            //Video Loop
            for (let i=0;i<response[1].data.data.length;i++){
                
                if(response[1].data.data[i].video.status==="Pending"){
                    let data = response[1].data.data[i]
                    let videoCaption = JSON.stringify(data.video.caption).replace(/['"]+/g, '')
                    postData+="<tr>";
                        postData += "<td>" + data.user.firstName + " " + data.user.lastName + "</td>";
                        postData += "<td>" + `<button onclick='setVideoOnModal("${data.video.videoName}","${videoCaption}")' data-toggle="modal" data-target="#postModal">` + "<i class='uil uil-eye'></i>" + "</button>" + "</td>";
                        postData += "<td>" + data.video.createdAt.split("T")[0] + "</td>";
                        postData += "<td>" + `<button onclick=updatePostStatus("${data.video._id}","Approved")>` + "Approve" + "</button>" + "</td>";
                        postData += "<td>" + `<button onclick=updatePostStatus("${data.video._id}","Declined")>` + "Decline" + "</button>" + "</td>";
                    postData += "</tr>";
                }
            }
            //Status Loop
            for (let i=0;i<response[2].data.data.length;i++){
                
                if(response[2].data.data[i].status.status==="Pending"){
                    let data = response[2].data.data[i]
                    // let statusDescription = data.status.description.replace(/['"]+/g, '')
                    let statusDescription = JSON.stringify(data.status.description).replace(/['"]+/g, '')
                    postData+="<tr>";
                        postData += "<td>" + data.user.firstName + " " + data.user.lastName + "</td>";
                        postData += "<td>" + `<button onclick='setStatusOnModal("${statusDescription}")' data-toggle="modal" data-target="#postModal">` + "<i class='uil uil-eye'></i>" + "</button>" + "</td>";
                        postData += "<td>" + data.status.createdAt.split("T")[0] + "</td>";
                        postData += "<td>" + `<button onclick=updateStatus("${data.status._id}","Approved")>` + "Approve" + "</button>" + "</td>";
                        postData += "<td>" + `<button onclick=updateStatus("${data.status._id}","Declined")>` + "Decline" + "</button>" + "</td>";
                    postData += "</tr>";
                }
            }
            $('#pending__posts__body').append(postData); //tbody where the data is appended
        }
    }))
    .catch((error)=>{
        if(error.response[0].status === 401 || error.response[0].status === 403 || error.response[1].status === 401 || error.response[1].status === 403){
            localStorage.clear();
            window.location = "../admin-login.html"
        }
    })
}
getAllPosts();

//Set image to popup
let imageSrc = "";
const setImageOnModal = (imageName,caption) =>{
    imageSrc="";
    $("#post__body").empty();
    imageSrc+=`<p>${caption}</p>`
    imageSrc+=`<img src="${imageUrl}/${imageName}">`

    $('#post__body').append(imageSrc)
}

//Set video to popup
let videoSrc = "";
const setVideoOnModal = (videoName,caption) =>{
    videoSrc="";
    $("#post__body").empty();
    videoSrc+=`<p>${caption}</p>`
    videoSrc+=`<video controls><source src="${videoUrl}${videoName}"></video>`

    $('#post__body').append(videoSrc)
}

//Set status to popup
let statusSrc = "";
const setStatusOnModal = (description) =>{
    statusSrc="";
    $("#post__body").empty();
    statusSrc+=`<p>${description}</p>`

    $('#post__body').append(statusSrc)
}



//Approve/Decline Post
const updatePostStatus = (id,status) => {
    axios
    .post(`${baseUrl}/api/admin/uploads-management/update-status/${id}`,{status:status},{headers: {'x-access-token': `${auth}`}})
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

//Approve Status
const updateStatus = (id,status) => {
    axios
    .post(`${baseUrl}/api/admin/uploads-management/update-status-information/${id}`,{status:status},{headers: {'x-access-token': `${auth}`}})
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