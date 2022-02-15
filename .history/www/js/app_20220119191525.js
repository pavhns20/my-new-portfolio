gsap.registerPlugin(ScrollTrigger);

gsap.to(".me-intro h1", {
	// x: -200,
	y: -10,
	duration: 3,
	// rotate: 360,
	scale: 1.5,
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
