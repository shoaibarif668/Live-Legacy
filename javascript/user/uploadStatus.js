$("#loader").hide()

//Uploading Status
let toast__body = document.getElementById("toast__body");
let error__toast__body = document.getElementById("error__toast__body")
const uploadStatus = () => {
    let jsonData = {} //Login Form Data
    var formData = $("#status__upload__form").serializeArray(); //Form Data Distributing into array form 

    getFormValues(formData,jsonData) //Helper Function To get & set Values from Form

    if(jsonData.description){
        $("#loader").show()
        axios
        .post(`${baseUrl}/api/user/uploads/upload-status/${userData._id}`,jsonData,{headers: {'x-access-token': `${auth}`}})
        .then((response)=>{
            if(response.status === 200){
                toast__body.innerHTML = response.data.message;
                $("#loader").hide()
                setTimeout(()=>{
                    $('#success__toast').toast({ delay: 1000 })
                    $('#success__toast').toast('show')
                },100)
            }
        })
        .catch((error)=>{
            error__toast__body.innerHTML = error.response.data.message;
                setTimeout(()=>{
                    $('#error__toast').toast({ delay: 1000 })
                    $('#error__toast').toast('show')
                },100)
                $("#loader").hide()
            if(error.response.status === 401 || error.response.status === 403){
                localStorage.clear();
                window.location = "../join-us.html"
            }
        })
    }
    else{
        error__toast__body.innerHTML = "Please Fill Out All Field";
        setTimeout(()=>{
            $('#error__toast').toast({ delay: 1000 })
            $('#error__toast').toast('show')
        },100)
    }
    
}