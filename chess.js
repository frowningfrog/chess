var intro = document.getElementById("intro");
var dropbtn = document.getElementById("dropbtn");

function king() {
    dropbtn.innerHTML = "The King";
    document.getElementById("kb").style.display = "none";
    document.getElementById("qb").style.display = "block";
    intro.style.display = "none";
    document.getElementById("queen").style.display = "none";
    document.getElementById("king").style.display = "block";
}

function queen() {
    dropbtn.innerHTML = "The Queen";
    document.getElementById("qb").style.display = "none";
    document.getElementById("kb").style.display = "block";
    intro.style.display = "none";
    document.getElementById("king").style.display = "none";
    document.getElementById("queen").style.display = "block";
}