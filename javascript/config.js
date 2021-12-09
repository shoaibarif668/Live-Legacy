
var baseUrl = "https://livelegacygallery.mytap.pro";
var imageUrl = "https://livelegacygallery.mytap.pro/livelegacyimages/";
var videoUrl = "https://livelegacygallery.mytap.pro/livelegacyvideos/";
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
