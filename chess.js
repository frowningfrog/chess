const intro = document.getElementById("intro");
const dropbtn = document.getElementById("dropbtn");
const kingb = document.getElementById("kb");
const queenb = document.getElementById("qb");
const pawnb = document.getElementById("pb");

function king() {
    dropbtn.innerHTML = "The King";
    kingb.style.display = "none";
    queenb.style.display = "block";
    pawnb.style.display = "block";
    intro.style.display = "none";
    document.getElementById("queenp").style.display = "none";
    document.getElementById("pawnp").style.display = "none";
    document.getElementById("queen").style.display = "none";
    document.getElementById("kingp").style.display = "block";
    document.getElementById("king").style.display = "block";
    document.getElementById("nav").style.display = "none";
}

function queen() {
    dropbtn.innerHTML = "The Queen";
    queenb.style.display = "none";
    kingb.style.display = "block";
    pawnb.style.display = "block";
    intro.style.display = "none";
    document.getElementById("kingp").style.display = "none";
    document.getElementById("pawnp").style.display = "none";
    document.getElementById("queenp").style.display = "block";
    document.getElementById("king").style.display = "none";
    document.getElementById("queen").style.display = "block";
}

function pawn() {
    dropbtn.innerHTML = "The Pawn";
    pawnb.style.display = "none";
    kingb.style.display = "block";
    queenb.style.display = "block";
    intro.style.display = "none";
    document.getElementById("kingp").style.display = "none";
    document.getElementById("queenp").style.display = "none";
    document.getElementById("pawnp").style.display = "block";

document.getElementById("king").style.display = "none";
    document.getElementById("queen").style.display = "none";
}