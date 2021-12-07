//Set up contact us form
localStorage.clear(); //To clear any missed local storage data
let toast__body = document.getElementById("toast__body");
let error__toast__body = document.getElementById("error__toast__body")
$("#contact__form").submit(function( event ) {
    event.preventDefault();
    let jsonData = {} //Login Form Data
    var formData = $("#contact__form").serializeArray(); //Form Data Distributing into array form 

    getFormValues(formData,jsonData);
    axios                                                      
    .post(`${baseUrl}/api/contact-us/send-mail`,jsonData)
    .then((response)=>{
        if(response.status === 200){
            toast__body.innerHTML = response.data.message;
            $('#success__toast').toast('show')
            setTimeout(()=>{
                location.reload();
            },500)
        }
    })
    .catch((error)=>{
        error__toast__body.innerHTML = error.response.data.message;
        setTimeout(()=>{
            
            $('#error__toast').toast({ delay: 1000 })
            $('#error__toast').toast('show')
        },200)
    })

  });