//Check if the url is in sub-folder
var subFolder = false;

//Logout 
const logout = () =>{
    localStorage.clear();
    $('#logoutToast').toast('show')
    setTimeout(()=>{
        window.location = './join-us.html'
    },1000)
}