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
    display: "none",
});
gsap.set(gsap.utils.toArray(topMainCircle, topSeedContainer), {
    transformOrigin: "center center",
});

gsap.timeline()
    .fromTo(
        [leftText, rightText],
        {
            y: 100,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            delay: 1,
            stagger: {
                amount: 2,
            },
        }
    )
    .fromTo(
        topMainCircle,
        {
            scale: 0,
        },
        {
            scale: 1,
            duration: 2,
        },
        "<"
    )
    .fromTo(
        topSeedContainer,
        {
            scale: 0,
        },
        {
            scale: 1,
            duration: 1.2,
        },
        "-=1"
    )

    .fromTo(
        topContainerSeed[0],
        {
            x: 500,
            y: 250,
            fill: "#FFFFFF",
            stroke: "#FFFFFF",
        },
        {
            x: 0,
            y: 0,
            fill: "#000000",
            stroke: "#000000",
            duration: 1.8,
        }
    )
    .fromTo(
        topContainerSeed[1],
        {
            x: -500,
            fill: "#FFFFFF",
            stroke: "#FFFFFF",
        },
        {
            x: 0,
            fill: "#000000",
            stroke: "#000000",
            duration: 1.8,
        },
        "<"
    )
    .fromTo(
        topContainerSeed[2],
        {
            x: -500,
            y: 500,
            fill: "#FFFFFF",
            stroke: "#FFFFFF",
        },
        {
            x: 0,
            y: 0,
            fill: "#000000",
            stroke: "#000000",
            duration: 1.8,
        },
        "<"
    )
    .to("#animation__wrap", {
        height: "0",
        duration: 2,
    })
    .set("#animation__wrap", {
        display: 'none'
    }).fromTo(
            "#top__text",
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
            }
        )
        .fromTo(
            ".brand #brand__svg",
            {
                opacity: 0,
                x: 50,
                y: 50,
            },
            {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 1,
            },
            "<"
        )
        .fromTo(
            "#highlightText h1",
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                stagger: {
                    each: 0.5,
                },
                duration: 1
            }
        )
        .fromTo(".bottom__texts", {
            y: 50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8
        });

// scroll trigger
gsap.timeline({
    scrollTrigger: {
        trigger: "#serious__seeds",
        start: "0% 100%",
        markers: true
    },
}).fromTo(
    "#serious__seeds .tittle",
    {
        opacity: 0,
        y: 100,
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: {
            each: 1,
        },
    }
);

// who we are
// gsap.timeline({
//     scrollTrigger: {
//         trigger: "#who__we__are",
//         start: "0% 80%",
//         end: "bottom 50%",
//         // markers: true
//     },
// })
//     .fromTo(
//         "#who__we__are .tittle",
//         {
//             opacity: 0,
//             y: 200,
//         },
//         {
//             opacity: 1,
//             y: 0,
//             duration: 1,
//             stagger: {
//                 each: 1,
//             },
//         }
//     )
//     .fromTo(
//         "#who__we__are .para",
//         {
//             opacity: 0,
//             y: 200,
//         },
//         {
//             opacity: 1,
//             y: 0,
//         },
//         "<"
//     )
//     .fromTo(
//         "#who__we__are .right__img",
//         {
//             opacity: 0,
//             y: 200,
//             x: 200,
//         },
//         {
//             opacity: 1,
//             x: 0,
//             y: 0,
//         },
//         "<"
//     );

// // some tittle here
// gsap.timeline({
//     scrollTrigger: {
//         trigger: "#some__tittle__here",
//         start: "0% 50%",
//         end: "bottom 50%",
//     },
// }).fromTo(
//     "#some__tittle__here .main__tittle",
//     {
//         opacity: 0,
//         y: 200,
//     },
//     {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         stagger: {
//             each: 1,
//         },
//     }
// );

// // some tittle here list
// gsap.utils
//     .toArray("#some__tittle__here .list__item li")
//     .forEach((item, index) => {
//         gsap.timeline({
//             scrollTrigger: {
//                 trigger: item,
//                 start: "center 70%",
//             },
//         }).fromTo(
//             item,
//             {
//                 y: 100,
//                 opacity: 0,
//             },
//             {
//                 opacity: 1,
//                 y: 0,
//                 duration: 1,
//             }
//         );
//     });

// // middle flower
// gsap.timeline({
//     scrollTrigger: {
//         trigger: "#main__slider",
//         start: "top center",
//     },
// })
//     .fromTo(
//         "#main__slider .texts .tittle",
//         {
//             y: 100,
//             opacity: 0,
//         },
//         {
//             opacity: 1,
//             y: 0,
//             duration: 1,
//         }
//     )
//     .fromTo(
//         "#main__slider .splide",
//         {
//             y: 100,
//             opacity: 0,
//         },
//         {
//             y: 0,
//             opacity: 1,
//         }
//     );

// // option brand logo
// gsap.timeline({
//     scrollTrigger: {
//         trigger: "#brand__logo",
//         start: "top center",
//     },
// })
//     .fromTo(
//         "#brand__logo .svg__wrapper",
//         {
//             scale: 0,
//             rotate: 150,
//         },
//         {
//             scale: 1,
//             rotate: 0,
//         }
//     )
//     .fromTo(
//         "#brand__logo .text__wrap .para",
//         {
//             y: 100,
//             opacity: 0,
//         },
//         {
//             y: 0,
//             opacity: 1,
//             stagger: {
//                 each: 0.5,
//             },
//         },
//         "<"
//     );

// // item lists
// gsap.utils.toArray("#brand__logo .list__items .list").forEach((item, index) => {
//     gsap.timeline({
//         scrollTrigger: {
//             trigger: item,
//             start: "top 70%",
//         },
//     })
//         .fromTo(
//             item,
//             {
//                 opacity: 0,
//                 y: 100,
//             },
//             {
//                 opacity: 1,
//                 y: 0,
//                 stagger: {
//                     each: 0.5,
//                 },
//             }
//         )
//         .fromTo(
//             item.querySelector("img"),
//             {
//                 opacity: 0,
//                 y: 100,
//             },
//             {
//                 opacity: 1,
//                 y: 0,
//             }
//         )
//         .fromTo(
//             item.querySelector(".para"),
//             {
//                 opacity: 0,
//                 y: 100,
//             },
//             {
//                 opacity: 1,
//                 y: 0,
//             }
//         )
// });
