const element = document.getElementById("burger");
const popup = document.getElementById("popup");

element.onclick = () => {
	element.classList.toggle("x");
	popup.classList.toggle("menu-open");
};

//header

const header = document.querySelector(".header");

window.onscroll = function () {
	var top = window.scrollY;
	console.log(top);
	if (top >= 150) {
		header.classList.add("active");
	} else {
		header.classList.remove("active");
	}
};
