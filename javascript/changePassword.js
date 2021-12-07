//Email Verification Api
localStorage.clear(); //To clear any missed local storage data
let emailSuccess = document.getElementById("emailSuccess") //Login Error Description ID
let emailError = document.getElementById("emailError") //Login Error Description ID
const urlParams = new URLSearchParams(window.location.search);
let email = "";

window.onload = () =>{
    email = urlParams.get('email');
}

$("#changePasswordForm").submit(function( event ) {
    event.preventDefault();
    let jsonData = {} //Login Form Data
    var formData = $("#changePasswordForm").serializeArray(); //Form Data Distributing into array form 

    getFormValues(formData,jsonData);
    
    if(jsonData.password === jsonData.confirmPassword){
        axios                                                      //Email Verification API Request
        .post(`${baseUrl}/api/user/forgotpassword/changepassword/${email}`,jsonData)
        .then((response)=>{
            if(response.status === 200){
                emailSuccess.innerHTML = response.data.message;
                $('#loginToast').toast('show')
    
                setTimeout(()=>{
                    window.location = "./join-us.html"
                },1000)
            }
        })
        .catch((error)=>{
            emailError.innerHTML = error.response.data.message;
            setTimeout(()=>{
                
                $('#loginErrorToast').toast({ delay: 1000 })
                $('#loginErrorToast').toast('show')
            },200)
        })
    }
    else{
        emailError.innerHTML = "Passwords Do Not Match";
        setTimeout(()=>{
            $('#loginErrorToast').toast({ delay: 1000 })
            $('#loginErrorToast').toast('show')
        },200)
    }
    

  });