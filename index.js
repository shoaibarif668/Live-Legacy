TweenMax.to(".loading-screen", 4, {
    delay: 6.6,
    top: "-110%",
    ease: Expo.easeInOut
});

TweenMax.from(".logo", 3, {
    delay: 8.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".contact", 3, {
    delay: 8.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".options", 3, {
    delay: 8.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".bottom-text", 3, {
    delay: 8.7,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".copyright", 3, {
    delay: 8.9,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.staggerFrom(".media ul li", 2, {
    delay: 8.7,
    opacity: 0,
    y: 20,
    ease: Power3.easeInOut
}, 0.1);

TweenMax.from(".menu", 3, {
    delay: 8.8,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".p1", 3, {
    delay: 9,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".p2", 3, {
    delay: 9.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from("#one", 3, {
    delay: 9.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from("#two", 3, {
    delay: 9.7,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});



// TweenMax.to(".logo", 3, {
//     delay: 14,
//     opacity: 1,
//     y: 20,
//     ease: Expo.easeInOut
// });

// TweenMax.to(".contact", 3, {
//     delay:14,
//     opacity: 1,
//     y: 20,
//     ease: Expo.easeInOut
// });

// TweenMax.to(".options", 3, {
//     delay: 14,
//     opacity: 1,
//     y: 20,
//     ease: Expo.easeInOut
// });

// TweenMax.to(".bottom-text", 3, {
//     delay:14,
//     opacity: 1,
//     y: 20,
//     ease: Expo.easeInOut
// });

// TweenMax.to(".copyright", 3, {
//     delay:14,
//     opacity: 1,
//     y: 20,
//     ease: Expo.easeInOut
// });

// TweenMax.staggerto(".media ul li", 2, {
//     delay:14,
//     opacity: 1,
//     y: 20,
//     ease: Power3.easeInOut
// }, 0.1);

// TweenMax.to(".menu", 3, {
//     delay:14,
//     opacity: 1,
//     y: 20,
//     ease: Expo.easeInOut
// });

// TweenMax.to(".p1", 3, {
//     delay: 14,
//     opacity: 1,
//     y: 20,
//     ease: Expo.easeInOut
// });

// TweenMax.to(".p2", 3, {
//     delay:14,
//     opacity: 1,
//     y: 20,
//     ease: Expo.easeInOut
// });

// TweenMax.to("#one", 3, {
//     delay:14,
//     opacity: 1,
//     y: 20,
//     ease: Expo.easeInOut
// });

// TweenMax.to("#two", 3, {
//     delay:14,
//     opacity: 1,
//     y: 20,
//     ease: Expo.easeInOut
// });
// TweenMax.from(".letters", 3, {
//     delay:14,
//     opacity: 1,
//     y: 20,
//     ease: Expo.easeInOut
// });

var t1 = new TimelineMax();

t1.from(".ringOne", 4, {
    delay: 0.4,
    opacity: 0,
    y:40,
    ease: Expo.easeInOut
}).from(".ringTwo", 4, {
    delay: 0.9,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}, "-=5").to(".ringOne", 4, {
    delay: 0.4,
    x: 40,
    ease: Expo.easeInOut
}).to(".ringTwo", 4, {
    delay: 0.9,
    x: 40,
    ease: Expo.easeInOut
},"-=5");

var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
.add({
targets: '.ml7 .letter',
translateY: ["1.1em", 0],
translateX: ["0.55em", 0],
translateZ: 0,
rotateZ: [180, 0],
duration: 750,
easing: "easeOutExpo",
delay: function(el, i) {
return 9000 + 50 * i;
}
});