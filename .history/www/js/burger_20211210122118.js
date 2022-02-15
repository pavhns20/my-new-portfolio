const element = document.getElementById("burger");
const popup = document.getElementById("popup");

element.onclick = () => {
	element.classList.toggle("x");
	popup.classList.toggle("menu-open");
};

// joechanged
