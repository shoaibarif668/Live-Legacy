// gsap.registerPlugin(ScrollTrigger);
//
// ScrollTrigger.defaults({
//     toggleActions: "play none none complete",
//     // markers:true,
// });
//
// let textT = gsap.timeline(
//     {
//         scrollTrigger: {
//             trigger: "#contact__description",
//             start: "top center",
//         },
//         repeat: 0
//     }
// );
// let formT = gsap.timeline(
//     {
//         scrollTrigger: {
//             trigger: "#contact__form",
//             start: "top center",
//         },
//         repeat: 0
//     }
// );
//
// textT.from(".contact__description h1", {
//     x: -50,
//     opacity: 0,
//     duration: 1
// })
//     .from(".contact__description h2", {
//         y: 30,
//         opacity: 0,
//         duration: 1
//     }, "-=1")
//     .from(".contact__description p", {
//         y: 30,
//         opacity: 0,
//         duration: 1
//     }, "-=1")
// formT.from("input", {
//     x: -50,
//     opacity: 0,
//     duration: 1
// })
//     .from("textarea", {
//         y: 30,
//         opacity: 0,
//         duration: 1
//     }, "-=1")
//     .from("button", {
//         y: 30,
//         opacity: 0,
//         duration: 1
//     }, "-=1")
