//Setting Up Date Picker
$(function() {
    $('input[name="consultDate"]').daterangepicker({
    //   timePicker: true,
    //   timePicker24Hour: true,
      singleDatePicker: true,
      minDate:new Date(),
      startDate: new Date(),
      locale: {
        // format: 'YYYY-MM-DDTHH:mm:SSZ'
        format: 'YYYY-MM-DD'
      }
    });
});

//Set up consult meeting on Zoom
localStorage.clear(); //To clear any missed local storage data
let startTime = ""; //Start time for the meeting
let toast__body = document.getElementById("toast__body");
let error__toast__body = document.getElementById("error__toast__body")
$("#consult__form").submit(function( event ) {
    event.preventDefault();
    let jsonData = {} //Login Form Data
    var formData = $("#consult__form").serializeArray(); //Form Data Distributing into array form 

    getFormValues(formData,jsonData);
    

    const submitForm = {
        ...jsonData,
        startTime: `${jsonData.consultDate}T${jsonData.meetingTime}:00Z`,
    }
    axios                                                      
    .post(`${baseUrl}/api/user/meetings/create-meeting`,submitForm)
    .then((response)=>{
        if(response.status === 200){
            toast__body.innerHTML = response.data.message;
            $('#success__toast').toast('show')
            setTimeout(()=>{
                location.reload();
            },1000)
        }
    })
    .catch((error)=>{
        error__toast__body.innerHTML = error.response.data.message;
        setTimeout(()=>{
            
            $('#error__toast').toast({ delay: 1000 })
            $('#error__toast').toast('show')
        },1000)
    })

  });   