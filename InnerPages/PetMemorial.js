gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions:"play  none none complete"
});
let tl2=gsap.timeline({

});
    var tl = gsap.timeline(
        {
            scrollTrigger: {
                trigger: ".banner__next__content",
                start: "top center",
            },

    repeat: 0

}
    );
    tl.from(".border__bottom",{
        x:-50,
        opacity:0,
        duration:1
    })
        .from("#banner__next__header",{
            y:30,
            opacity:0,
            duration:1
        },"-=1")
        .from("#banner__next__text",{
            y:30,
            opacity:0,
            duration:1
        },"-=1")
    //
    // tl.to(".cont", {
    //     duration: 1,
    //     text: {
    //         value: "Do you really have corona",     //New text
    //         newClass: "class2",                     //New class for the new text
    //         delimiter: " "                          //changes text word by word can be removed to change the whole sentence
    //     }
    // });
    // tl.from(".border__bottom", {scaleX: 0, transformOrigin: "right center"});
    // tl.from("#banner__next__header", {duration: 1.00, y: 30}, "text");
    // tl.from("#banner__next__text", {duration: 1.00, y: -30}, "text");

