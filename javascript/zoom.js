    //---------------Consultuncy Form Starts------------------------//
// let client_id = "GIU_o8l4QmqnYYvfdGKK4Q";  //Zoom Client id
// let redirect_uri = "https://live-legacy.com/consult.html"; //Zoom return redirect url
// let getZoomCodeEndPoint = "https://zoom.us/oauth/authorize"; //Zoom get zoom authentication code end point, used to get access token

//Get Code from query string
const urlParams = new URLSearchParams(window.location.search);
const tokenEncoded = "R0lVX284bDRRbXFuWVl2ZmRHS0s0UTpzbFlGd3h1cFF0UE1sQ0tUbHloaFBQUGx1eFFPU1B4Zg=="
let code;
let config = {
    headers: {
    'Content-Type': `application/x-www-form-urlencoded`,
    'Authorization': `Basic ${tokenEncoded}`,
    }
  }
const getCode = () =>{
    code = urlParams.get('code');
    console.log(code)
};
getCode()


const getAccessToken = () => {
    if(code){
        axios
        .post(`https://zoom.us/oauth/token?grant_type=authorization_code&code=${code}&redirect_uri=https://live-legacy.com/consult.html`,"",config)
        .then((response)=>{
            if(response.status===200){
                console.log(response.data.access_token)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
}
getAccessToken()