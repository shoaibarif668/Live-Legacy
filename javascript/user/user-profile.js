//Get user id from params
const urlParams = new URLSearchParams(window.location.search);
const user__id = urlParams.get('user');

// //QR Initializer
// window.onload = function () {
//     var qrcode = new QRCode(document.getElementById("qrcode"), {
//         text: `live-legacy.com/gallery.html?user=${user__id}`,
//         width: 300,
//         height: 300,
//         colorDark : "#000000",
//         colorLight : "#ffffff",
//         correctLevel : QRCode.CorrectLevel.H
//     });
// }



//Set Initial Profile Information
var userProfileData;
let user__username = document.getElementById("user__username");

let single__user__profile__picture = document.getElementById("single__user__profile__picture");
const getUserProfileData = () => {
    if(user__id){
      axios
      .get(`${baseUrl}/api/user/${user__id}`,"",{headers: {'x-access-token': `${auth}`}})
      .then((response)=>{
          if(response.status === 200){
              userProfileData = response.data.data;
          }
      })
      .then(()=>{
        if(!subFolder){
            if(userProfileData.profilePicture.length > 0){
                single__user__profile__picture.style.backgroundImage = `url(${imageUrl}/${userProfileData.profilePicture})`;
            }
            else{
                single__user__profile__picture.style.backgroundImage = `url("./images/placeholder.png")`
            }
        }
        else{
            if(userProfileData.profilePicture.length > 0){
                single__user__profile__picture.style.backgroundImage = `url(${imageUrl}/${userProfileData.profilePicture})`;
            }
            else{
                single__user__profile__picture.style.backgroundImage = `url("../images/placeholder.png")`
            } 
        }
      })
      .then(()=>{
        user__username.innerHTML = `${userProfileData.firstName} ${userProfileData.lastName}`
      })
      .catch((error)=>{
          if(error.response.status === 401 || error.response.status === 403){
              localStorage.clear();
              window.location = "./join-us.html"
          }
      })
  }
}
getUserProfileData();

//Copy Gallery Link
let toast__body = document.getElementById("toast__body");
const copyText = () =>{
    navigator.clipboard.writeText(`live-legacy.com/gallery.html?user=${user__id}`)
    toast__body.innerHTML = "Gallery Link Successfully Copied";
    $('#success__toast').toast('show')
}