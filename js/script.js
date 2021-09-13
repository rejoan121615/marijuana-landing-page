// slider 

document.addEventListener("DOMContentLoaded", function () {
    new Splide(".splide", {
        type: "loop",
        perPage: 3,
        focus: "center",
        autoWidth: false,
    }).mount();
});
// gsap plugins 
gsap.registerPlugin(ScrollTrigger);
// bottom texts  
const leftText = gsap.utils.toArray("#bottom-texts #serious path");
const rightText = gsap.utils.toArray("#bottom-texts #seeds path");
const bottomTextGradient = gsap.utils.toArray("#bottom-texts #circle-gradient");
// top logo 
const topMainCircle = gsap.utils.toArray("#top-logo #main-circle");
const topSeedContainer = gsap.utils.toArray("#top-logo #seedContainer");
const topContainerSeed = gsap.utils.toArray("#top-logo #seed");
// const topCenterCircleGradient = gsap.utils.toArray("#top-logo #inner-dot-group");

gsap.set(bottomTextGradient, {
    display: 'none'
})
gsap.set(
    gsap.utils.toArray(topMainCircle, topSeedContainer),
    {
        transformOrigin: "center center",
    }
);



// gsap.timeline()
//     .fromTo(
//         [leftText, rightText],
//         {
//             y: 100,
//             opacity: 0,
//         },
//         {
//             y: 0,
//             opacity: 1,
//             delay: 1,
//             stagger: {
//                 amount: 2,
//             },
//         }
//     )
//     .fromTo(
//         topMainCircle,
//         {
//             scale: 0,
//         },
//         {
//             scale: 1,
//             duration: 2,
//         },
//         "<"
//     )
//     .fromTo(
//         topSeedContainer,
//         {
//             scale: 0,
//         },
//         {
//             scale: 1,
//             duration: 1.2,
//         },
//         "-=1"
//     )

//     .fromTo(
//         topContainerSeed[0],
//         {
//             x: 500,
//             y: 250,
//             fill: "#FFFFFF",
//             stroke: "#FFFFFF",
//         },
//         {
//             x: 0,
//             y: 0,
//             fill: "#000000",
//             stroke: "#000000",
//             duration: 1.8,
//         }
//     )
//     .fromTo(
//         topContainerSeed[1],
//         {
//             x: -500,
//             fill: "#FFFFFF",
//             stroke: "#FFFFFF",
//         },
//         {
//             x: 0,
//             fill: "#000000",
//             stroke: "#000000",
//             duration: 1.8,
//         },
//         "<"
//     )
//     .fromTo(
//         topContainerSeed[2],
//         {
//             x: -500,
//             y: 500,
//             fill: "#FFFFFF",
//             stroke: "#FFFFFF",
//         },
//         {
//             x: 0,
//             y: 0,
//             fill: "#000000",
//             stroke: "#000000",
//             duration: 1.8,
//         },
//         "<"
//     )
//     .to("#animation__wrap", {
//         height: "0",
//         duration: 2,
//     })
//     .set("#animation__wrap", {
//         display: 'none'
//     }).fromTo(
//             "#top__text",
//             {
//                 opacity: 0,
//                 y: 50,
//             },
//             {
//                 opacity: 1,
//                 y: 0,
//                 duration: 0.8,
//             }
//         )
//         .fromTo(
//             ".brand #brand__svg",
//             {
//                 opacity: 0,
//                 x: 50,
//                 y: 50,
//             },
//             {
//                 opacity: 1,
//                 x: 0,
//                 y: 0,
//                 duration: 1,
//             },
//             "<"
//         )
//         .fromTo(
//             "#highlightText h1",
//             {
//                 y: 100,
//                 opacity: 0,
//             },
//             {
//                 y: 0,
//                 opacity: 1,
//                 stagger: {
//                     each: 0.5,
//                 },
//                 duration: 1
//             }
//         )
//         .fromTo(".bottom__texts", {
//             y: 50,
//             opacity: 0,
//         }, {
//             y: 0,
//             opacity: 1,
//             duration: 0.8
//         });

// scroll trigger 
gsap.timeline({
    scrollTrigger: {
        trigger: "#serious__seeds",
        markers: true,
        start: '50% 80%',
        end: "end 30%",
        scrub: 1
    },
}).fromTo("#serious__seeds .tittle", {
    opacity: 0,
    y: 100
}, {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: {
        each: 1
    }
});