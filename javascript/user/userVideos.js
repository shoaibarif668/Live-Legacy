//Get All Users && Show User's List On Admin Dashboard
let videoData = "" //Table Data To be mapped to html

const getUserVideos = () =>{
    axios
    .get(`${baseUrl}/api/user/uploads/all-user-upload/${userData._id}`)
    .then((response)=>{
        if(response.status === 200){
            if(response.data.data.videos.length>0){
                for (let i=0;i<response.data.data.videos.length;i++){
                    if(response.data.data.videos[i].status === "Approved"){
                        let data = response.data.data.videos[i]
                        
                        videoData+="<div class='col-md-6'>";
                            videoData+="<div class='gallery__image__wrapper'>";
                                videoData+="<div class='gallery__image'>";
                                        videoData+=`<video controls>`
                                            videoData+=`<source src="${videoUrl}${data.videoName}">`
                                        videoData+=`</video>`  
                                videoData+= "</div>"
                            videoData+= "</div>"
                        videoData += "</div>";
                    }
                }
            }
            else{
                videoData+="<div class='no__image__wrapper'>";
                    videoData+="<h2>";
                            videoData+= `No Video Found 😢😢`
                    videoData+= "</h2>"
                videoData+= "</div>"
            }
            $('#user__videos').append(videoData); //tbody where the data is appended
        }
    })
}
getUserVideos();

