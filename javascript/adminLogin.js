//Login Api
localStorage.clear(); //To clear any missed local storage data
let loginError = document.getElementById("loginError") //Login Error Description ID


$("#adminLoginForm").submit(function( event ) {
    event.preventDefault();
    let jsonData = {} //Login Form Data
    var formData = $("#adminLoginForm").serializeArray(); //Form Data Distributing into array form 

    getFormValues(formData,jsonData);
   
    axios                                                      //Login API Request
    .post(`${baseUrl}/api/admin/auth/login`,jsonData)
    .then((response)=>{
        if(response.status === 200){
            $('#loginToast').toast('show')
            localStorage.setItem("auth",response.data.data.token)
            setTimeout(()=>{
                window.location = "./admin.html"
            },1000)
        }
    })
    .catch((error)=>{
        loginError.innerHTML = error.response.data.message;
        setTimeout(()=>{
            
            $('#loginErrorToast').toast({ delay: 1000 })
            $('#loginErrorToast').toast('show')
        },200)
    })

  });