function setCookie(cclicks, cvalue) {
    var d = new Date();
    d.setTime(10 * 365 * 24 * 60 * 60);
    var expires = "expires="+d.toUTCString();
    document.cookie = cclicks + "=" + clicks + ";" + expires + ";path=/";
}

function getCookie(cclicks) {
    var clicks = cclicks + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(clicks) == 0) {
            return c.substring(clicks.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("cclicks");
    if (user != "") {
        document.getElementById("output").innerHTML = cclicks;
    } else {
        var clicks=0;
    }
}