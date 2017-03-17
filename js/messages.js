function messageNoclicks() {
	document.getElementById("message").innerHTML = "Not enough clicks!";
	$('#message').show(0);
	setTimeout(function(){$('#message').hide();}, 2000);
}

function messageDuplicate() {
	document.getElementById("message").innerHTML = "You already have that!";
	$('#message').show(0);
	setTimeout(function(){$('#message').hide();}, 2000);
}
