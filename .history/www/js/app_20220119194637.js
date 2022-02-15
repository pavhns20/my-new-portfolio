gsap.registerPlugin(ScrollTrigger);

// Scrolltrigger.defaults({
// 	toggleActions: "restart pause reverse pause",
// });

gsap.to(".me-intro h1", {
	 x: 25%,
	y: -30,
	start: "top 10%",
	duration: 15,
	delay: 4,
	toggleActions: "restart pause reverse pause",
	// horizontal: true,
	// rotate: 360,
	scale: 3.5,
	opacity: 0,
});

// scroll trigger pinned sections
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".panel").forEach((panel, i) => {
	ScrollTrigger.create({
		trigger: panel,
		start: "top top",
		pin: true,
		pinspacing: true,
	});
});
// gsap.utils.toArray(".panel").forEach((panel, i) => {
// 	ScrollTrigger.create({
// 		trigger: panel,
// 		start: "top top",
// 		pin: true,
// 		pinSpacing: false,
// 	});
// });

// ScrollTrigger.create({
// 	snap: 1 / 4, // snap whole page to the closest section!
// });
