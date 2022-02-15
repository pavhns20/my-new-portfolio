// gsap.registerPlugin(ScrollTrigger);

// bring back from here?????
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".me-intro",
		start: "top top",
		end: "bottom top",
		// pin: true,
		// pinSpacing: false,
		scrub: true,
	},
});
tl.to(".circle", {
	scale: 5,
})

	.to(".me-intro h1", {
		scale: 8,
		// opacity: 0
	})

	.to([".me-intro .view-btn", ".text", ".me-intro h2"], {
		scale: 0,
		// opacity: 0,
	});

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
		clipPath: "circle(5% at 77% 40%)",
	},
	{
		clipPath: "circle(75% at 50% 50%)",
		ease: "none",
		scrollTrigger: {
			trigger: bgImage,
			scrub: 1,
			start: "top center",
			end: "top center-=200",
		},
	}
);

// me-intro h1

// back totop
