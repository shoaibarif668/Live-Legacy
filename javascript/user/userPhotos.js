//Get All Users && Show User's List On Admin Dashboard
let photoData = "" //Table Data To be mapped to html

const getUserPhotos = () =>{
    axios
    .get(`${baseUrl}/api/user/uploads/all-user-upload/${userData._id}`)
    .then((response)=>{
        if(response.status === 200){
            if(response.data.data.photos.length>0){
                for (let i=0;i<response.data.data.photos.length;i++){
                    if(response.data.data.photos[i].status === "Approved"){
                        let data = response.data.data.photos[i]
                        
                        photoData+="<div class='col-md-6'>";
                            photoData+="<div class='gallery__image__wrapper'>";
                                photoData+="<div class='gallery__image'>";
                                    photoData+="<button>"
                                        photoData+=`<img src='${imageUrl}/${data.imageName}' alt=''>`
                                    photoData+="</button>"
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
            $('#user__photos').append(photoData); //tbody where the data is appended
        }
    })
}
getUserPhotos();
