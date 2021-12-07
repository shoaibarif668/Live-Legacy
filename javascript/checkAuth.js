//Check Auth Token on page load
window.onload = () => {
    if(!auth && !subFolder){
        window.location = "./home.html"
    }
    else if (!auth && subFolder){
        window.location = "../home.html"
    }
};