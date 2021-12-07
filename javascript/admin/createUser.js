//Create New User
let error__toast__body = document.getElementById("error__toast__body");
let toast__body = document.getElementById("toast__body");
$("#createNewUserForm").submit(function (event) {
  event.preventDefault();

  let jsonData = {}; //Profile Form Data
  var formData = $("#createNewUserForm").serializeArray(); //Form Data Distributing into array form

  getFormValues(formData, jsonData);
  axios
    .post(
      `${baseUrl}/api/admin/user-management/create-user`,
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
        window.location = "../admin-login.html";
      }
    });
});
