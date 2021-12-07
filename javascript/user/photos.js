//Get All Users && Show User's List On Admin Dashboard
let photoData = "" //Table Data To be mapped to html

const getAllPhotos = () =>{
    axios
    .get(`${baseUrl}/api/user/uploads/all-photos`)
    .then((response)=>{
        if(response.status === 200){
            if(response.data.data.length>0){
                for (let i=0;i<response.data.data.length;i++){
                    if(response.data.data[i].photo.status === "Approved"){
                        let data = response.data.data[i]
                        
                        photoData+="<div class='col-md-6'>";
                            photoData+="<div class='gallery__image__wrapper'>";
                                photoData+="<div class='gallery__image'>";

                                    // photoData+=`<button onclick='getAllComments("${data.photo._id}")' data-toggle="modal" data-target="#photoComments">`
                                        photoData+=`<img src='${imageUrl}/${data.photo.imageName}' alt=''>`
                                    // photoData+="</button>"
                                    photoData+="<p class='text' id='text'>"
                                        photoData+= `<button onclick='viewUserProfile("${data.user._id}")'>By ${data.user.firstName} ${data.user.lastName}</button>`
                                    photoData+= "</p>"
                                photoData+= "</div>"
                            photoData+= "</div>"
                        photoData += "</div>";
                    }
                }
            }
            else{
                photoData+="<div class='no__image__wrapper'>";
                    photoData+="<h2>";
                            photoData+= `No Image Found 😢😢`
                    photoData+= "</h2>"
                photoData+= "</div>"
            }
            $('#website__photos').append(photoData); //tbody where the data is appended
        }
    })
}
getAllPhotos();

// //Show Comments Of Photo
// let commentData = "";
// let postId = "" //To Comment On This Post
// const getAllComments = (id) => {
//     commentData="";
//     $("#all__comments").empty();
//     postId = id;
//     axios
//    .get(`${baseUrl}/api/user/uploads/all-comments/${id}`)
//    .then((response)=>{
//        if(response.status === 200){
//         if(response.data.data.length>0){
//             for (let i=0;i<response.data.data.length;i++){
//                     let data = response.data.data[i]
//                     console.log(data.comment.userId)
//                     commentData+="<div class='comment__wrapper'>";
//                         commentData+="<div class='comment__inner__left'>";
//                             commentData+=`<div class='comment__profile__wrapper' style="background-image:url('${imageUrl}/${data.user.profilePicture}');">`;
//                             commentData+= "</div>"
//                         commentData += "</div>";
//                         commentData+="<div class='comment__inner__right'>";
//                             commentData+="<div class='comment__inner__right__header'>";
//                                 commentData+="<h6>";
//                                     commentData+= `${data.user.firstName} ${data.user.lastName} `
//                                     commentData+= `<span>${data.comment.createdAt.split("T")[0]} ${data.comment.createdAt.split("T")[1].split(".")[0]}</span>`
//                                 commentData+= "</h6>"
//                                 if(userData._id === data.comment.userId){
//                                     commentData+=`<button type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">`;
//                                     commentData+= `<i class="fa fa-ellipsis-h"></i>`
//                                     commentData+="</button>";
//                                     commentData+=`<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">`;
//                                         commentData+= `<button onclick='deleteComment("${data.comment._id}")' class="dropdown-item">Delete Comment <i class="uil uil-trash"></i></button>`
//                                     commentData+="</div>";
//                                 }
//                             commentData += "</div>";
//                             commentData+="<p>"
//                                 commentData+= `${data.comment.text}`
//                             commentData+= "</p>"
//                         commentData += "</div>";
//                     commentData += "</div>";
//             }
//         }
//         else{
//             commentData+="<div class='no__image__wrapper'>";
//                 commentData+="<h5>";
//                         commentData+= `No Comments Yet`
//                 commentData+= "</h5>"
//             commentData+= "</div>"
//         }
//         $('#all__comments').append(commentData); //tbody where the data is appended
//        }
//    })
// }


//Comment On Photo
// let error__toast__body = document.getElementById("error__toast__body") //Login Error Description ID
// let toast__body = document.getElementById("toast__body");
// let commentText = document.getElementById("text"); //Get Text to remove it after commenting/ any errpr
// $("#commentForm").submit(function( event ) {
//     event.preventDefault();
//     let jsonData = {} //Login Form Data
//     var formData = $("#commentForm").serializeArray(); //Form Data Distributing into array form 

//     getFormValues(formData,jsonData);
   
//     axios                                                     
//     .post(`${baseUrl}/api/user/uploads/add-comment/${userData._id}/${postId}`,jsonData,{headers: {'x-access-token': `${auth}`}})
//     .then((response)=>{
//         if(response.status === 200){
//             toast__body.innerHTML = response.data.message;
//             setTimeout(()=>{
                
//                 $('#success__toast').toast({ delay: 1000 })
//                 $('#success__toast').toast('show')
//             },200)
//             $('#photoComments').modal('hide')
//             commentText.value = "";
//         }
//     })
//     .catch((error)=>{
//         $('#photoComments').modal('hide')
//         error__toast__body.innerHTML = error.response.data.message;
//         setTimeout(()=>{
            
//             $('#error__toast').toast({ delay: 1000 })
//             $('#error__toast').toast('show')
//         },200)
//         if(error.response.status === 401 || error.response.status === 403){
//             localStorage.clear();
//             window.location = "../join-us.html"
//         }
//     })

//   });

// //Delete Your Comment

// const deleteComment = (commentId) => {
//     axios
//     .post(`${baseUrl}/api/user/uploads/delete-comment/${userData._id}/${commentId}`,"",{headers: {'x-access-token': `${auth}`}})
//     .then((response)=>{
//         if(response.status === 200){
//             toast__body.innerHTML = response.data.message;
//             setTimeout(()=>{
//                 $('#success__toast').toast({ delay: 1000 })
//                 $('#success__toast').toast('show')
//             },200)
//             $('#photoComments').modal('hide')
//         }
//     })
//     .catch((error)=>{
//         $('#photoComments').modal('hide')
//         error__toast__body.innerHTML = error.response.data.message;
//         setTimeout(()=>{
            
//             $('#error__toast').toast({ delay: 1000 })
//             $('#error__toast').toast('show')
//         },200)
//         if(error.response.status === 401 || error.response.status === 403){
//             localStorage.clear();
//             window.location = "../join-us.html"
//         }
//     })
// }

//View User's Profile
const viewUserProfile = (id) => {
    window.location.href=`./user-profile.html?user=${id}`
}