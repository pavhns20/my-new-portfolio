gsap.registerPlugin(ScrollTrigger);

gsap.to(".me-intro", {
	x: 800,
	duration: 3,
	rotate: 360,
	scrollTrigger: ".square2",
});
