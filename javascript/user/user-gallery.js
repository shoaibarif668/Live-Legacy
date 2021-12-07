
//Initialize the intl-tel-input plugin
const phoneInputField = document.querySelector("#phone");
   const phoneInput = window.intlTelInput(phoneInputField, {
     utilsScript:
       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
   });


//Get All Gallery Data && Show it on User Dashboard
let photoDataMain = ""
let photoDatacol1 = "" //Table Data To be mapped to html
let photoDatacol2 = "" //Table Data To be mapped to html

let user__data = JSON.parse(localStorage.getItem("data"))
let assetsArray = [];
const getAllGalleryAssets = () =>{
    axios
    .get(`${baseUrl}/api/user/uploads/all-user-upload/${user__data._id}`)
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
    
}
getAllGalleryAssets();


const getHeaderInfo = () => {
    $('#remember__name').empty();
    $('#remember__desc').empty();
    axios
    .get(`${baseUrl}/api/user/${user__data._id}`)
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


let toast__body = document.getElementById("toast__body");
let error__toast__body = document.getElementById("error__toast__body")
const shareForm = () => {
    const phoneNumber = phoneInput.getNumber();

    if(phoneInput.isValidNumber()){
        window.open(
            `https://wa.me/${phoneNumber.split("+")[1]}?text=live-legacy.com/gallery.html?user=${user__data._id}`,
            '_blank'
        );
        toast__body.innerHTML = "Link Shared";
          setTimeout(()=>{
            $('#success__toast').toast({ delay: 1000 })
            $('#success__toast').toast('show')
        },100)
          $('#postModal').modal('hide')
    }   
    else{
        error__toast__body.innerHTML = "Please Enter A Valid Contact Number";
        setTimeout(()=>{
            $('#error__toast').toast({ delay: 1000 })
            $('#error__toast').toast('show')
        },100)
        $('#postModal').modal('hide')
    }
}

//View User's Profile
const viewUserProfile = (id) => {
    window.location.href=`./user-profile.html?user=${id}`
}