
//Media Library
let mediaTab = false;
let firstClick = true;
let mediaId = document.getElementById("tab__action__media")
let mediaTabId = document.getElementById("media__parent")
let mediaIconRight = document.getElementById("mediaIconRight")
let mediaIconDown = document.getElementById("mediaIconDown")
const openMediaTab = () =>{
    if(mediaTab || firstClick){
        mediaId.classList.add("open")
        mediaTabId.classList.add("active")
        mediaIconDown.classList.add("openMediaTab")
        mediaIconRight.classList.remove("openMediaTab")
        mediaId.classList.remove("closed")
        mediaTab=false;
        firstClick=false;
    }
    else{
        mediaId.classList.add("closed")
        mediaId.classList.remove("open")
        mediaIconRight.classList.add("openMediaTab")
        mediaIconDown.classList.remove("openMediaTab")
        mediaTabId.classList.remove("active")
        mediaTab=true;
    }
}

//User Management
let userTab = false;
let userFirstClick = true;
let userId = document.getElementById("user__tab__action__media")
let userTabId = document.getElementById("user__parent")
let userIconRight = document.getElementById("userIconRight")
let userIconDown = document.getElementById("userIconDown")
const openUserTab = () =>{
    if(userTab || userFirstClick){
        userId.classList.add("user__open")
        userTabId.classList.add("active")
        userIconDown.classList.add("openUserTab")
        userIconRight.classList.remove("openUserTab")
        userId.classList.remove("user__closed")
        userTab=false;
        userFirstClick=false;
    }
    else{
        userId.classList.add("user__closed")
        userId.classList.remove("user__open")
        userIconRight.classList.add("openUserTab")
        userIconDown.classList.remove("openUserTab")
        userTabId.classList.remove("active")
        userTab=true;
    }
}

//Admin Consultation Management
let consultTab = false;
let consultFirstClick = true;
let consultId = document.getElementById("consult__tab__action__media")
let consultTabId = document.getElementById("consult__parent")
let consultIconRight = document.getElementById("consultIconRight")
let consultIconDown = document.getElementById("consultIconDown")
const openConsultTab = () =>{
    if(consultTab || consultFirstClick){
        consultId.classList.add("consult__open")
        consultTabId.classList.add("active")
        consultIconDown.classList.add("openConsultTab")
        consultIconRight.classList.remove("openConsultTab")
        consultId.classList.remove("consult__closed")
        consultTab=false;
        consultFirstClick=false;
    }
    else{
        consultId.classList.add("consult__closed")
        consultId.classList.remove("consult__open")
        consultIconRight.classList.add("openConsultTab")
        consultIconDown.classList.remove("openConsultTab")
        consultTabId.classList.remove("active")
        consultTab=true;
    }
}


//Show Name On Sidebar
let user__name = document.getElementById("user__name")
const setUserName = () => {
    if(userData){
      axios
      .get(`${baseUrl}/api/user/${userData._id}`,"",{headers: {'x-access-token': `${auth}`}})
      .then((response)=>{
          if(response.status === 200){
              userProfileData = response.data.data;
          }
      })
      .then(()=>{
        user__name.innerHTML = `${userProfileData.firstName} ${userProfileData.lastName}`
      })
      .catch((error)=>{
          if(error.response.status === 401 || error.response.status === 403){
              localStorage.clear();
              window.location = "./join-us.html"
          }
      })
  }
}
setUserName();

//Get User By Id && Show Profile Picture On Sidebar
let profile__picture = document.getElementById("profile__picture")
let imageName = "";
const getUserById = () =>{
    if(userData){
        axios
        .get(`${baseUrl}/api/user/${userData._id}`,"",{headers: {'x-access-token': `${auth}`}})
        .then((response)=>{
            if(response.status === 200){
                imageName = response.data.data.profilePicture;
            }
        })
        .then(()=>{
            if(!subFolder){
                if(imageName.length > 0){
                    profile__picture.style.backgroundImage = `url(${imageUrl}/${imageName})`;
                }
                else{
                    profile__picture.style.backgroundImage = `url("./images/placeholder.png")`
                }
            }
            else{
                if(imageName.length > 0){
                    profile__picture.style.backgroundImage = `url(${imageUrl}/${imageName})`;
                }
                else{
                    profile__picture.style.backgroundImage = `url("../images/placeholder.png")`
                } 
            }
        })
        .catch((error)=>{
            if(error.response.status === 401 || error.response.status === 403){
                localStorage.clear();
                window.location = "./join-us.html"
            }
        })
    }
}
getUserById();
