// console.log("hi there");
// $(function() {
//   while( $('.current').height() > $('.current').height() ) {
//       $('#fitin div').css('font-size', (parseInt($('#fitin div').css('font-size')) - 1) + "px" );
//   }
// });

// var starsNumber = 2000;
// //number of stars

// var c = document.getElementById('c');
// var ctx = c.getContext('2d');

// var w = window.innerWidth;
// var h = window.innerHeight * 2;
// var x = 100; var y = 400;

// //where the stars are stored
// var stars = [];
// for (i = 0; i < starsNumber; i++) {
//   //making 100 stars
//   stars.push(new star);
// };

// function star() {
//   //the obj star function
//   this.x = Math.random() * w;
//   this.y = Math.random() * h;
//   //random position

//   this.vx = 1;
//   //starting velocity

//   this.r = Math.random() * 3.5 + 2;
//   //random size
// }

// //the reset
// function draw() {
//   c.width = w;
//   c.height = h;
//   //canvas width & height

//   for (t = 0; t < stars.length; t++) {
//     var s = stars[t];

//     //building the stars
//     ctx.beginPath();
//     ctx.fillStyle = 'white';
//     ctx.arc(s.y, s.x, s.r, Math.PI * 2, true);
//     ctx.fill();

//     //animating the stars
//     s.x -= s.vx;

//     //keeping the stars on the canvas
//     if (s.x < -s.r) {
//       s.x = w + s.r;
//     };
//     if (s.r < 5) {
//       s.vx = 2;
//     };
//     if (s.r < 4) {
//       s.vx = 1;
//     };
//     if (s.r < 3) {
//       s.vx = 0.5;
//     };
//   }
// }

// setInterval(draw, 0.5);
/* On click of the hamburger menu, open the hamburger menu */
document
  .querySelector(".hamburger-icon")
  .addEventListener("click", function () {
    document.querySelector(".hamburger-menu").classList.add("menu-open");
  });

/* On click of the cross, close the hamburger menu */
document.querySelector(".menu-close").addEventListener("click", function () {
  document.querySelector(".hamburger-menu").classList.remove("menu-open");
});




console.log("hello!");

// line animation //
var tl = gsap.timeline({ repeat: -1 });
tl.from("#line", { scaleX: 0, transformOrigin: "right center" });
tl.from("#upper", { duration: 0.75, y: 30 }, "text");
tl.from("#lower", { duration: 0.75, y: -30 }, "text");
tl.to("#line, #upper, #lower", { duration: 1, opacity: 0, ease: "none" }, "+=2");



// gsap.to(".heard p", { duration: 3, x: 250, borderRadius: "50%", border: "5px solid yellow", ease: "back"});

// gsap.to(".heard p", {duration:5, rotation: 360, x:250, ease: "back"});

//  gsap.from("img, video", {duration: 3, opacity: 0, scale: 0.2, ease: "back"});

// gsap.from(".heard p", {duration: 1, opacity: 0, y: "random(-2

// TweenLite.set(contentToScroll, {
//   y: -window.pageYOffset
// });

mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

