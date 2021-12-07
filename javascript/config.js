
var baseUrl = "http://173.82.185.13:4000";
var imageUrl = "http://173.82.185.13/livelegacyimages/";
var videoUrl = "http://173.82.185.13/livelegacyvideos/";
var auth = localStorage.getItem("auth")
var userData = JSON.parse(localStorage.getItem("data"))

//Helper Function to get form values from HTML Forms
const getFormValues = (formData,jsonData) =>{
    $.each(formData, function() { //Iterating over the form input array and distributing it into object
        if (jsonData[this.name]) {
            if (!jsonData[this.name].push) {
                jsonData[this.name] = [jsonData[this.name]];
            }
            jsonData[this.name].push(this.value || '');
        } else {
            jsonData[this.name] = this.value || '';
        }
    });
}