// gsap.registerPlugin(ScrollTrigger);

// bring back from here?????
// gsap.registerPlugin(ScrollTrigger);
// gsap.to(".me-intro h1", {
// 	x: 25,
// 	y: -30,
// 	start: "top 10%",
// 	end: "top 20%",
// 	duration: 15,
// 	delay: 4,
// 	toggleActions: "restart pause reverse pause",
// 	// horizontal: true,
// 	// rotate: 360,
// 	scale: 3.5,
// 	opacity: 0,
// });
// bring back to here????

let bgImage = document.querySelector(".image-container");
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
