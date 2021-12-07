//Login Api
localStorage.clear(); //To clear any missed local storage data
let loginError = document.getElementById("loginError") //Login Error Description ID
let loginSuccess = document.getElementById("loginSuccess") //Login Success Description ID


$("#userLoginForm").submit(function( event ) { //**Submit Function for user login Form**//
    event.preventDefault(); 
    let jsonData = {} //Login Form Data
    var formData = $("#userLoginForm").serializeArray(); //Form Data Distributing into array form 

    getFormValues(formData,jsonData) //Helper Function To get & set Values from Form

    axios                                                      //Login API Request
    .post(`${baseUrl}/api/user/login`,jsonData)
    .then((response)=>{
        if(response.status === 200){
                loginSuccess.innerHTML = response.data.message;
                $('#loginToast').toast('show')
    
                localStorage.setItem("auth",response.data.data.token) //Setting Auth token
                localStorage.setItem("data",JSON.stringify(response.data.data.user)) //Setting User Data

                setTimeout(()=>{
                    window.location = "./user.html" //Redirecting to user dashboard
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


// <!-- Commented out because client wants admin to create user :( -->
// $("#userSignupForm").submit(function( event ) { //**Submit Function for user signup Form**//
//     event.preventDefault(); 
//     let jsonData = {} //Login Form Data
//     var formData = $("#userSignupForm").serializeArray(); //Form Data Distributing into array Form 

//     getFormValues(formData,jsonData) //Helper Function To get & set Values from form

//     axios                                                      //Login API Request
//     .post(`${baseUrl}/api/user/signup`,jsonData)
//     .then((response)=>{
//         if(response.status === 200){
//             loginSuccess.innerHTML = response.data.message;
//             $('#loginToast').toast('show')

//             setTimeout(()=>{
//                 location.reload();
//             },1000)
//         }
//     })
//     .catch((error)=>{
//         loginError.innerHTML = error.response.data.message;
//         setTimeout(()=>{
            
//             $('#loginErrorToast').toast({ delay: 1000 })
//             $('#loginErrorToast').toast('show')
//         },200)
//     })

//   });

  const forgotPassword = () => {        //**Forget Password Popup --> Redirects To Change Password**//
    let jsonData = {} //Login Form Data
    var formData = $("#forgotPasswordForm").serializeArray(); //Form Data Distributing into array Form 

    getFormValues(formData,jsonData) //Helper Function To get & set Values from form

    axios                                                      //Login API Request
    .post(`${baseUrl}/api/user/forgotpassword`,jsonData)
    .then((response)=>{
        if(response.status === 200){
            loginSuccess.innerHTML = response.data.message;
            $('#loginToast').toast('show')

            setTimeout(()=>{
                window.location = `./change-password.html?email=${jsonData.email}`
            },1000)
        }
    })
    .catch((error)=>{
        loginError.innerHTML = error.response.data.message;
        $('#forgotPassword').modal('hide')
        setTimeout(()=>{
            
            $('#loginErrorToast').toast({ delay: 1000 })
            $('#loginErrorToast').toast('show')
        },200)
    })
  }