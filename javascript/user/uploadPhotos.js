//Setting up filepond
FilePond.registerPlugin(FilePondPluginFileValidateType,FilePondPluginImagePreview,FilePondPluginFileEncode);

const inputElement = document.querySelector('input[type="file"]');

// Create a FilePond instance
let pond = FilePond.create(inputElement, {
    // Only accept images
    acceptedFileTypes: ['image/*'],
    maxFiles: 1,
    //beforeRemoveFile:item=>{} //**Do Not Need This Function because only 1 image is uploaded, removing and adding over that image replace the old base64
});

//Getting Image Base64
let image = ""
pond.on('addfile', (error, file) => {
    if (error) {
        return;
    }

    image = file.getFileEncodeDataURL();
});

//Setting Profile Picture
let toast__body = document.getElementById("toast__body");
let error__toast__body = document.getElementById("error__toast__body")
const uploadPicture = () => {
    let jsonData = {} //Login Form Data
    var formData = $("#photo__upload__form").serializeArray(); //Form Data Distributing into array form 

    getFormValues(formData,jsonData) //Helper Function To get & set Values from Form

    if(image.length>0 && jsonData.caption){
        const submitObj = {
            image:image,
            caption:jsonData.caption
        }
        axios
        .post(`${baseUrl}/api/user/uploads/upload-photo/${userData._id}`,submitObj,{headers: {'x-access-token': `${auth}`}})
        .then((response)=>{
            if(response.status === 200){
                toast__body.innerHTML = response.data.message;
                setTimeout(()=>{
                    $('#success__toast').toast({ delay: 1000 })
                    $('#success__toast').toast('show')
                },100)
                pond.removeFile();
            }
        })
        .catch((error)=>{
            error__toast__body.innerHTML = error.response.data.message;
                setTimeout(()=>{
                    $('#error__toast').toast({ delay: 1000 })
                    $('#error__toast').toast('show')
                },100)
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