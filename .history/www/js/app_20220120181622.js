// gsap.registerPlugin(ScrollTrigger);

// bring back from here?????
let intro = document.querySelector(".me-intro h1");
gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(intro, {
	x: 25,
	y: -30,
	start: "top 10%",
	end: "top 20%",
	// duration: 8,
	// delay: 4,
	// toggleActions: "restart pause reverse pause",

	// horizontal: true,
	// rotate: 360,
	scale: 3.5,
	opacity: 0,
	scrollTrigger: {
		trigger: intro,
		scrub: 1,
	},
});
// bring back to here????

// this works!!!

// let bgImage = document.querySelector(".image-container");
// gsap.registerPlugin(ScrollTrigger);
// gsap.fromTo(
// 	bgImage,
// 	{
// 		clipPath: "circle(5% at 77% 40%)",
// 	},
// 	{
// 		clipPath: "circle(75% at 50% 50%)",
// 		ease: "none",
// 		scrollTrigger: {
// 			trigger: bgImage,
// 			scrub: 1,
// 			start: "top center",
// 			end: "top center-=200",
// 		},
// 	}
// );
//  to here!!!

let bgImage = document.querySelector("#text-image");
gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(
	bgImage,
	{
		clipPath: "circle(5% at 50% 40%)",
	},
	{
		clipPath: "circle(75% at 50% 50%)",
		ease: "none",
		scrollTrigger: {
			trigger: bgImage,
			scrub: 1,
			start: "top center",
			end: "top center-=250",
		},
	}
);
