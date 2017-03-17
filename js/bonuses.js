function bonus () {
	if(autoclicker_status==0) {
		if (clicks >= 5) {
			clicks = clicks-5;
			autoclicker_status=1;
			disp();
			var interval = setInterval( autoclick, 1000);
		}

		else {
			messageNoclicks();
		}
	}
	
	else {
		messageDuplicate();
	}
}

function glasses() {
	if(glasses_status==0) {
		if (clicks >= 10) {
			clicks = clicks-10;
			glasses_status=1;
			disp();
			document.getElementById('llamapic').src='images/laama_glasses.gif'
		}

		else {
			messageNoclicks();
		}
	}
	else {
	messageDuplicate();
	}
}
