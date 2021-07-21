gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: "play none none complete"
});

let tPag2__1 = gsap.timeline(
    {
        scrollTrigger: {
            trigger: "#banner__next__content",
            start: "top center",
        },
        repeat: 0
    }
);
let tpage2__2 = gsap.timeline(
    {
        scrollTrigger: {
            trigger: "#banner__two__next__content",
            start: "top center",
        },
        repeat: 0
    }
);
let tpage2__3 = gsap.timeline(
    {
        scrollTrigger: {
            trigger: "#banner__three__next__content",
            start: "top center",
        },
        repeat: 0
    }
);
tPag2__1.from("#border__bottom", {
    x: -50,
    opacity: 0,
    duration: 1
})
    .from("#banner__next__header", {
        y: 30,
        opacity: 0,
        duration: 1
    }, "-=1")
    .from("#banner__next__text", {
        y: 30,
        opacity: 0,
        duration: 1
    }, "-=1")
tpage2__2.from("#border__bottom__two", {
    x: -50,
    opacity: 0,
    duration: 1
})
    .from("#banner__two__next__header", {
        y: 30,
        opacity: 0,
        duration: 1
    }, "-=1")
    .from("#banner__two__next__text", {
        y: 30,
        opacity: 0,
        duration: 1
    }, "-=1")
tpage2__3.from("#border__bottom__three", {
    x: -50,
    opacity: 0,
    duration: 1
})
    .from("#banner__three__next__header", {
        y: 30,
        opacity: 0,
        duration: 1
    }, "-=1")
    .from("#banner__three__next__text", {
        y: 30,
        opacity: 0,
        duration: 1
    }, "-=1")


