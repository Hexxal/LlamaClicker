var clicks = 0;
var autoclicker_status=0;
var glasses_status=0;

function disp() {
	document.getElementById("output").innerHTML = clicks;
}



function count() {
	clicks ++;
	setCookie("cclicks", clicks);
	disp();
	document.getElementById("output").style.fontSize = "48px";
	setTimeout(function(){document.getElementById("output").style.fontSize = "42px";}, 20);
}

function autoclick() {
	clicks++;
	disp();
	document.getElementById("output").style.fontSize = "48px";
	setTimeout(function(){document.getElementById("output").style.fontSize = "42px";}, 20);
}



function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}