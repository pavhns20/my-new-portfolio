/* On click of the hamburger menu, open the hamburger menu */
// document
// 	.querySelector(".hamburger-icon")
// 	.addEventListener("click", function () {
// 		document.querySelector(".hamburger-menu").classList.add("menu-open");
// 	});

/* On click of the cross, close the hamburger menu */
// document.querySelector(".menu-close").addEventListener("click", function () {
// 	document.querySelector(".hamburger-menu").classList.remove("menu-open");
// });

// console.log("hello!");
// to here

// line animation //

// var tl = gsap.timeline({ repeat: -1 });
// tl.from("#line", { scaleX: 0, transformOrigin: "right center" });
// tl.from("#upper", { duration: 0.75, y: 30 }, "text");
// tl.from("#lower", { duration: 0.75, y: -30 }, "text");
// tl.to(
// 	"#line, #upper, #lower",
// 	{ duration: 1, opacity: 0, ease: "none" },
// 	"+=2"
// );

// const header = document.querySelector("header");

// let oldScrollPosition = 0;

// // false = scrolling down
// // true = scrolling up
// let isScrollingUp = false;

// let isHeaderVisible = true;

// window.addEventListener("scroll", (event) => {
// 	isScrollingUp = oldScrollPosition > window.scrollY;
// 	oldScrollPosition = window.scrollY;

// 	if (!isScrollingUp && window.scrollY > 200 && isHeaderVisible) {
// 		header.classList.add("invisible");

// 		isHeaderVisible = false;
// 	}

// 	if (isScrollingUp && !isHeaderVisible) {
// 		header.classList.remove("invisible");
// 		isHeaderVisible = true;
// 	}
// });
/*
// for portfolio function

filterSelection("all");
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("column");
	if (c == "all") c = "";
	for (i = 0; i < x.length; i++) {
		w3RemoveClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
	}
}

function w3AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}

function w3RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}








*/
// for wordpress slideshows
// var slideIndex = [1, 1];
// var slideId = ["mySlides1", "mySlides2"];
// showSlides(1, 0);
// showSlides(1, 1);

// function plusSlides(n, no) {
// 	showSlides((slideIndex[no] += n), no);
// }

// function showSlides(n, no) {
// 	var i;
// 	var x = document.getElementsByClassName(slideId[no]);
// 	if (n > x.length) {
// 		slideIndex[no] = 1;
// 	}
// 	if (n < 1) {
// 		slideIndex[no] = x.length;
// 	}
// 	for (i = 0; i < x.length; i++) {
// 		x[i].style.display = "none";
// 	}
// 	x[slideIndex[no] - 1].style.display = "block";
// }

//new hamburger//
// const element = document.getElementById("burger");

// element.onclick = () => {
// 	element.classList.toggle("x");
// };

// const element = document.getElementById("burger");

// element.onclick = () => {
// 	if (element.classList.contains("x")) {
// 		element.classList.remove("x");
// 	} else {
// 		element.classList.add("x");
// 	}
// };

// swiper

// var swiper = new Swiper(".mySwiper", {
// 	effect: "coverflow",
// 	grabCursor: true,
// 	centeredSlides: true,
// 	slidesPerView: "3",
// 	coverflowEffect: {
// 		rotate: 50,
// 		stretch: 0,
// 		depth: 100,
// 		modifier: 1,
// 		slideShadows: true,
// 	},
// 	pagination: {
// 		el: ".swiper-pagination",
// 	},
// });

// loader //

// const loader = document.querySelector(".loader");
// const load = document.querySelector(".load");

// function init() {
// 	setTimeout(() => {
// 		loader.style.opacity = 0;
// 		loader.style.display = "none";

// 		load.style.display = "block";
// 		setTimeout(() => (load.style.opacity = 1), 50);
// 	}, 4000);
// }
// init();

//gsap pinned section

// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".me-intro h1", {
// 	x: -300,
// 	duration: 5,
// 	scrollTrigger: ".me-intro h1",
// });

// gsap.registerPlugin(ScrollTrigger);

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

// - to add class on nav scroll

// const nav = document.querySelector(".topnav-right");
// window.addEventListener("scroll", fixNav);

// function fixNav() {
// 	if (window.scrollY > nav.offsetHeight + 200) {
// 		nav.classList.add("active");
// 	} else {
// 		nav.classList.remove("active");
// 	}
// }

// const header = document.querySelector(".header");

// window.onscroll = function () {
// 	var top = window.scrollY;
// 	console.log(top);
// 	if (top >= 150) {
// 		header.classList.add("active");
// 	} else {
// 		header.classList.remove("active");
// 	}
// };
