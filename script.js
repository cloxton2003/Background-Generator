var css = document.querySelector("h3");
var body = document.getElementById("gradient");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var btn = document.getElementById("mybtn");


function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background;
}

function random_rgba() {
	var randomColor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);  //https://www.paulirish.com/2009/random-hex-color-code-snippets/
	var randomColor2 = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);  //https://www.paulirish.com/2009/random-hex-color-code-snippets/
	body.style.background = "linear-gradient(to right, " + randomColor + ", " + randomColor2 + ")";
	css.textContent = body.style.background;
	document.getElementById("one").value = randomColor;
		document.getElementById("two").value = randomColor2;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

btn.addEventListener("click", random_rgba);

body.onload = setGradient();


