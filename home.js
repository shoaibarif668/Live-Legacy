var tl = gsap.timeline({
    paused: "true"
});
tl.to(".menu",{
    duration: 1,
    x: "0%",
    ease: Expo.easeInOut
});
tl.fromTo(".li",{
    y:"-100%",
    opacity: 0
},{
    duration: .5,
    opacity: 1,
    y: "0%",
    stagger: 0.25
});
tl.fromTo(".social-li",{
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
    tl.play();
}
function togglec(){
    tl.reverse();
}