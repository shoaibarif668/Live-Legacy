//Hiding Loader By Default
$('#loader').hide();

//Setting up filepond
FilePond.registerPlugin(FilePondPluginFileValidateType,FilePondPluginImagePreview,FilePondPluginFileEncode);

const inputElement = document.querySelector('input[type="file"]');

// Create a FilePond instance
let toast__body = document.getElementById("toast__body");
let error__toast__body = document.getElementById("error__toast__body")
let pond = FilePond.create(inputElement, {
    // Only accept videos
    acceptedFileTypes: ['video/mp4'],
    maxFiles: 1,
    allowRemove:false,
    // server:{
    //     process: (fieldName, file, metadata, load, error, progress, abort) => {

    //         // We ignore the metadata property and only send the file
    //         // Sending Request through https instead of Axios

    //         const formData = new FormData();
    //         formData.append("video", file, file.name);
    
    //         const request = new XMLHttpRequest();
    //         request.open('POST', `${baseUrl}/api/user/uploads/upload-video/${userData._id}`);
    //         request.setRequestHeader('x-access-token', `${auth}`,'Content-Type','multipart/form-data;boundary=<calculated when request is sent>');
    //         request.upload.onprogress = (e) => {
    //             progress(e.lengthComputable, e.loaded, e.total);
    //         };

    //         request.onload = function() {
    //             if (request.status >= 200 && request.status < 300) {
    //                 toast__body.innerHTML = request.responseText;
    //                             setTimeout(()=>{
    //                                 $('#success__toast').toast({ delay: 5000 })
    //                                 $('#success__toast').toast('show')
    //                             },100)
    //                 load(request.responseText);
    //                 pond.removeFile();
    //             }
    //             else if(request.status === 401 || request.status=== 403){
    //                 localStorage.clear();
    //                 window.location = ".."
    //             }
    //             else {
    //                 error('oh no');
    //                 pond.removeFile();
    //                 error__toast__body.innerHTML = request.responseText;
    //                 setTimeout(()=>{
    //                     $('#error__toast').toast({ delay: 1000 })
    //                     $('#error__toast').toast('show')
    //                 },100)
    //             }
    //         };

    //         request.send(formData);

    //     }
    // }
    //beforeRemoveFile:item=>{} //**Do Not Need This Function because only 1 image is uploaded, removing and adding over that image replace the old base64
});

// 'addfile' instead of 'FilePond:addfile'
const formData = new FormData();

pond.on('addfile', (error, file) => {
    if (error) {
        console.log('Something we wrong');
        return;
    }
    formData.append("video", file.file, file.fileName);
});

//Uploading Video
const uploadVideo = () => {
    formData.delete('caption');

    let jsonData = {} //Login Form Data
    
    var formInput = $("#video__upload__form").serializeArray(); //Form Data Distributing into array form 

    getFormValues(formInput,jsonData) //Helper Function To get & set Values from Form
    
    if(jsonData.caption){
        formData.append('caption', jsonData.caption);
        $('#loader').show();
        axios
        .post(`${baseUrl}/api/user/uploads/upload-video/${userData._id}`,formData,{headers: {'x-access-token': `${auth}`}})
        .then((response)=>{
            if(response.status === 200){
                toast__body.innerHTML = response.data.message;
                setTimeout(()=>{
                    $('#success__toast').toast({ delay: 1000 })
                    $('#success__toast').toast('show')
                },100)
                pond.removeFile();
                $('#loader').hide();
            }
        })
        .catch((error)=>{
            error__toast__body.innerHTML = error.response.data.message;
                setTimeout(()=>{
                    $('#error__toast').toast({ delay: 1000 })
                    $('#error__toast').toast('show')
                },100)
            $('#loader').hide();
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