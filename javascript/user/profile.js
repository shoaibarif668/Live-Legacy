//Set Initial Profile Information
let userProfileData;
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let phoneNumber = document.getElementById("phoneNumber");
const setProfileData = () => {
    if(userData){
      axios
      .get(`${baseUrl}/api/user/${userData._id}`,"",{headers: {'x-access-token': `${auth}`}})
      .then((response)=>{
          if(response.status === 200){
              userProfileData = response.data.data;
          }
      })
      .then(()=>{
        firstName.value = userProfileData.firstName ? userProfileData.firstName : "";
        lastName.value = userProfileData.lastName ?  userProfileData.lastName : "";
        phoneNumber.value = userProfileData.phoneNumber ? userProfileData.phoneNumber : "";
      })
      .catch((error)=>{
          if(error.response.status === 401 || error.response.status === 403){
              localStorage.clear();
              window.location = "./join-us.html"
          }
      })
  }
}
setProfileData();

//Updating Profile Information
let error__toast__body = document.getElementById("error__toast__body");
let toast__body = document.getElementById("toast__body");
$("#profileInfoForm").submit(function (event) {
  event.preventDefault();

  let jsonData = {}; //Profile Form Data
  var formData = $("#profileInfoForm").serializeArray(); //Form Data Distributing into array form

  getFormValues(formData, jsonData);
  axios
    .post(
      `${baseUrl}/api/user/manage-profile/update-personal-information/${userData._id}`,
      jsonData,
      { headers: { "x-access-token": `${auth}` } }
    )
    .then((response) => {
      if (response.status === 200) {
        toast__body.innerHTML = response.data.message;
        setTimeout(() => {
          $("#success__toast").toast({ delay: 1000 });
          $("#success__toast").toast("show");
        }, 100);
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
    })
    .catch((error) => {
      error__toast__body.innerHTML = error.response.data.message;
      setTimeout(() => {
        $("#error__toast").toast({ delay: 1000 });
        $("#error__toast").toast("show");
      }, 100);
      if (error.response.status === 401 || error.response.status === 403) {
        localStorage.clear();
        window.location = "../join-us.html";
      }
    });
});


//Update User Password
$("#passwordForm").submit(function (event) {
  event.preventDefault();

  let jsonData = {}; //Profile Form Data
  var formData = $("#passwordForm").serializeArray(); //Form Data Distributing into array form

  getFormValues(formData, jsonData);

  if(jsonData.confirmpassword === jsonData.newpassword){
    axios
    .post(
      `${baseUrl}/api/user/manage-profile/change-password/${userData._id}`,
      jsonData,
      { headers: { "x-access-token": `${auth}` } }
    )
    .then((response) => {
      if (response.status === 200) {
        toast__body.innerHTML = response.data.message;
        setTimeout(() => {
          $("#success__toast").toast({ delay: 1000 });
          $("#success__toast").toast("show");
        }, 100);
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
    })
    .catch((error) => {
      error__toast__body.innerHTML = error.response.data.message;
      setTimeout(() => {
        $("#error__toast").toast({ delay: 1000 });
        $("#error__toast").toast("show");
      }, 100);
      if (error.response.status === 401 || error.response.status === 403) {
        localStorage.clear();
        window.location = "../join-us.html";
      }
    });
  }else{
    error__toast__body.innerHTML = "Passwords Do Not Match";
    setTimeout(() => {
      $("#error__toast").toast({ delay: 1000 });
      $("#error__toast").toast("show");
    }, 100);
  }
  
});