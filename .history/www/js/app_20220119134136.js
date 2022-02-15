gsap.registerPlugin(ScrollTrigger);

gsap.to(".me-intro h1", {
	x: -300,
	duration: 5,
	scrollTrigger: ".me-intro h1",
});
