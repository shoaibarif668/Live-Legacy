//Check if the url is in sub-folder
var subFolder = true;

//Logout 
const logout = () =>{
    localStorage.clear();
    $('#logoutToast').toast('show')
    setTimeout(()=>{
        window.location = '../admin-login.html'
    },1000)
}