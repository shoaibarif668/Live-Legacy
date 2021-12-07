//Get user id from params
const urlParams = new URLSearchParams(window.location.search);
const user__id = urlParams.get('user');

//Get All Gallery Assets
// let photoData = "" //Table Data To be mapped to html
// let videoData = ""
// const getAllPhotos = () =>{
//     axios
//     .get(`${baseUrl}/api/user/uploads/all-user-upload/${user__id}`)
//     .then((response)=>{
//         if(response.status === 200){
//             if(response.data.data.photos.length>0){
//                 for (let i=0;i<response.data.data.photos.length;i++){
//                     if(response.data.data.photos[i].status === "Approved"){
//                         let data = response.data.data.photos[i]
                        
//                         photoData+="<div class='col-md-6'>";
//                             photoData+="<div class='gallery__image__wrapper'>";
//                                 photoData+="<div class='gallery__image'>";
//                                     // photoData+=`<button onclick='getAllComments("${data._id}")' data-toggle="modal" data-target="#photoComments">`
//                                     photoData+="<button>"
//                                         photoData+=`<img src='${imageUrl}/${data.imageName}' alt=''>`
//                                     photoData+="</button>"
//                                 photoData+= "</div>"
//                             photoData+= "</div>"
//                         photoData += "</div>";
//                     }
//                 }
//             }
//             else{
//                 photoData+="<div class='no__image__wrapper'>";
//                     photoData+="<h2>";
//                             photoData+= `No Image Found 😢😢`
//                     photoData+= "</h2>"
//                 photoData+= "</div>"
//             }
//             $('#website__photos').append(photoData); //tbody where the data is appended
//         }
//     })
// }
// const getAllVideos = () =>{
//     axios
//     .get(`${baseUrl}/api/user/uploads/all-user-upload/${user__id}`)
//     .then((response)=>{
//         if(response.status === 200){
//             if(response.data.data.videos.length>0){
//                 for (let i=0;i<response.data.data.videos.length;i++){
//                     if(response.data.data.videos[i].status === "Approved"){
//                         let data = response.data.data.videos[i]
                        
//                         videoData+="<div class='col-md-6'>";
//                             videoData+="<div class='gallery__image__wrapper'>";
//                                 videoData+="<div class='gallery__image'>";
//                                     videoData+=`<video controls>`
//                                         videoData+=`<source src="${videoUrl}${data.videoName}">`
//                                     videoData+=`</video>` 
//                                     // videoData+="<p class='text' id='text'>"
//                                     //     videoData+= `<span>By ${data.user.firstName} ${data.user.lastName}</span>`
//                                     // videoData+= "</p>"
//                                     // videoData+=`<button class="video__comment__btn" onclick='getAllComments("${data.video._id}")' data-toggle="modal" data-target="#photoComments">`
//                                     //     videoData+= `Comments <i class="uil uil-arrow-right"></i>`
//                                     // videoData+= "</button>"
//                                 videoData+= "</div>"
//                             videoData+= "</div>"
//                         videoData += "</div>";
//                     }
//                 }
//             }
//             else{
//                 videoData+="<div class='no__image__wrapper'>";
//                     videoData+="<h2>";
//                             videoData+= `No Video Found 😢😢`
//                     videoData+= "</h2>"
//                 videoData+= "</div>"
//             }
//             $('#website__videos').append(videoData); //tbody where the data is appended
//         }
//     })
// }
// getAllVideos()
// getAllPhotos();

let photoDataMain = ""
let photoDatacol1 = "" //Table Data To be mapped to html
let photoDatacol2 = "" //Table Data To be mapped to html


let assetsArray = [];
const getAllGalleryAssets = () =>{
    axios
    .get(`${baseUrl}/api/user/uploads/all-user-upload/${user__id}`)
    .then((response)=>{
        if(response.status === 200){
            if(response.data.data.photos.length>0 || response.data.data.videos.length>0 || response.data.data.status.length > 0){
                assetsArray = [...response.data.data.photos,...response.data.data.videos,...response.data.data.status]
                for (let i=0;i<assetsArray.length;i++){
                    // console.log(assetsArray[i].status)
                    if(assetsArray[i].status === "Approved"){
                        let galleryData = assetsArray[i]
                        if(i%2===0){
                                photoDatacol1+="<div class='gallery__image__wrapper'>";
                                    photoDatacol1+="<div class='gallery__image'>";
                                            if (galleryData.imageName){
                                                photoDatacol1+=`<img src='${imageUrl}/${galleryData.imageName}' alt=''>`
                                            }
                                            else if(galleryData.videoName){
                                                photoDatacol1+=`<video controls>`
                                                    photoDatacol1+=`<source src="${videoUrl}${galleryData.videoName}">`
                                                photoDatacol1+=`</video>`  
                                            }
                                        // photoDatacol1+="<p class='text' id='text'>"
                                        //     photoDatacol1+= `<button onclick='viewUserProfile("${galleryData.user._id}")'>By ${galleryData.user.firstName} ${galleryData.user.lastName}</button>`
                                        // photoDatacol1+= "</p>"
                                    photoDatacol1+= "</div>"
                                    if(galleryData.caption){
                                        photoDatacol1+="<div class='gallery__description'>";
                                                photoDatacol1+=`<p>${galleryData.caption}</p>`;                                           
                                        photoDatacol1+="</div>";
                                    }
                                    else{
                                        photoDatacol1+="<div class='gallery__description status__wrapper'>";                                    
                                            photoDatacol1+=`<p>${galleryData.description}</p>`;
                                        photoDatacol1+="</div>";
                                    }
                                photoDatacol1+= "</div>"
                        }
                        else{
                                photoDatacol2+="<div class='gallery__image__wrapper'>";
                                    photoDatacol2+="<div class='gallery__image'>";
                                            if (galleryData.imageName){
                                                photoDatacol2+=`<img src='${imageUrl}/${galleryData.imageName}' alt=''>`
                                            }
                                            else if(galleryData.videoName){
                                                photoDatacol2+=`<video controls>`
                                                    photoDatacol2+=`<source src="${videoUrl}${galleryData.videoName}">`
                                                photoDatacol2+=`</video>`  
                                            }
                                        // photoDatacol2+="<p class='text' id='text'>"
                                        //     photoDatacol2+= `<button onclick='viewUserProfile("${galleryData.user._id}")'>By ${galleryData.user.firstName} ${galleryData.user.lastName}</button>`
                                        // photoDatacol2+= "</p>"
                                    photoDatacol2+= "</div>"
                                    if(galleryData.caption){
                                        photoDatacol2+="<div class='gallery__description'>";
                                                photoDatacol2+=`<p>${galleryData.caption}</p>`;                                           
                                        photoDatacol2+="</div>";
                                    }
                                    else{
                                        photoDatacol2+="<div class='gallery__description status__wrapper'>";                                    
                                            photoDatacol2+=`<p>${galleryData.description}</p>`;
                                        photoDatacol2+="</div>";
                                    }
                                photoDatacol2+= "</div>"
                        }
                        
                    }
                }
            }
            else{
                photoDataMain+="<div class='no__image__wrapper'>";
                    photoDataMain+="<h2>";
                            photoDataMain+= `No Gallery Assets`
                    photoDataMain+= "</h2>"
                photoDataMain+= "</div>"
            }
            $('#website__gallery__data__col1').append(photoDatacol1); //tbody where the data is appended
            $('#website__gallery__data__col2').append(photoDatacol2); //tbody where the data is appended
        }
    })
    .catch(()=>{
        window.location = "./join-us.html"
    })
    
}
getAllGalleryAssets();

const getHeaderInfo = () => {
    $('#remember__name').empty();
    $('#remember__desc').empty();
    axios
    .get(`${baseUrl}/api/user/${user__id}`)
    .then((response)=>{
        if(response.status === 200){
            $('#remember__name').append(response.data.data.galleryPage ? `In Loving Memory Of ${response.data.data.galleryPage}` : "Your Gallery Page");
            $('#remember__desc').append(response.data.data.galleryDescription ? response.data.data.galleryDescription : null);
            $('#loader').hide();
        }
    })
    .catch(()=>{
        $('#loader').hide();
    })
}
getHeaderInfo();