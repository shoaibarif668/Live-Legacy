let t_menu = gsap.timeline({
    paused: "true"
});
t_menu.to(".menu",{
    duration: 1,
    x: "0%",
    ease: Expo.easeInOut
});
t_menu.fromTo(".li",{
    y:"-100%",
    opacity: 0
},{
    duration: .5,
    opacity: 1,
    y: "0%",
    stagger: 0.25
});
t_menu.fromTo(".social-li",{
    y:"-50%",
    opacity: 0
},{
    duration:0.8,
    opacity: 1,
    stagger: 0.25,
    ease: Expo.easeOut
},
"-=0.5");

function toggle(){
    t_menu.play();
}
function togglec(){
    t_menu.reverse();
}
const petRedirect = () =>{
    window.location = './InnerPages/PetMemorialPlaque.html';
}
// window.onbeforeunload = function() {
//     window.setTimeout(function () {
//         window.location = 'index.html';
//     }, 0);
//     window.onbeforeunload = null; // necessary to prevent infinite loop, that kills your browser
// }