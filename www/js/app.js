// gsap.registerPlugin(ScrollTrigger);

// bring back from here?????
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".me-intro",
		start: "top top",
		end: "bottom top-=120",
		// pin: true,
		// pinSpacing: false,
		scrub: true,
	},
});
// tl.to(
// 	["#hero-btn.view-btn ", ".text", ".me-intro h2"],
// 	{
// 		y: -1,
// 		scale: -1,
// 		opacity: 0,
// 		duration: 0.5,
// 		scrub: true,
// 	},
// 	"-=1"
// );

tl.to(
	".circle",
	{
		// y: -50,
		x: 200,
		scale: 3,
		opacity: 0,
	},
	"-=1"
).to(".me-intro h1", {
	// y: 10,
	scale: 5,
	opacity: 0,
	delay: 0,
});

// .to([".me-intro .view-btn", ".text", ".me-intro h2"], {
// 	scale: 0,

// });

// .to(
// 	[".text", ".me-intro h2", ".me-intro >.view-btn"],
// 	{
// 		scale: 0,
// 	},
// 	0
// )
// .to(
// 	[
// 		".me-intro h1",
// 		".circle",
// 		".text",
// 		".me-intro h2",
// 		".me-intro > .view-btn",
// 	],
// 	{
// 		opacity: 0,
// 	}
// );

// tl.to([".text", "hero-btn", ".me-intro h1", ".circle"], {
// 	opacity: 0,
// });

// gsap.to(".me-intro h1", {
// 	 x: 55,
// 	// y: -30,
// 	start: "top 10%",
// 	end: "bottom -100%",
// 	duration: 9,
// 	delay: 4,
// 	// toggleActions: "play none play reverse ",
// 	// horizontal: true,
// 	// rotate: 360,
// 	scale: 3.5,
// 	opacity: 0,
// 	scrub: 1,
// });
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
		clipPath: "circle(5% at 76% 40%)",
	},
	{
		clipPath: "circle(74% at 50% 50%)",
		ease: "none",
		scrollTrigger: {
			trigger: bgImage,
			scrub: 1,
			start: "top center",
			end: "top center-=200",
		},
	}
);

//header

// const header = document.querySelector(".header");

// window.onscroll = function () {
// 	var top = window.scrollY;
// 	console.log(top);
// 	if (top >= 790) {
// 		header.classList.add("active");
// 	} else {
// 		header.classList.remove("active");
// 	}
// };
