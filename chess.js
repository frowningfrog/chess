const intro = document.getElementById("intro");
const dropbtn = document.getElementById("dropbtn");
const kingb = document.getElementById("kb");
const queenb = document.getElementById("qb");
const pawnb = document.getElementById("pb");

function hide() {
    intro.style.display = "none";
    document.getElementById("chessp").style.display = "none";
    document.getElementById("kingp").style.display = "none";
    document.getElementById("queenp").style.display = "none";
    document.getElementById("pawnp").style.display = "none";

    document.getElementById("king").style.display = "none";
    document.getElementById("queen").style.display = "none";
    //document.getElementById("pawn").style.display = "none";
}

function show() {
    kingb.style.display = "block";
    queenb.style.display = "block";
    pawnb.style.display = "block";
}

function king() {
    hide();
    show();
    dropbtn.innerHTML = "The King";
    kingb.style.display = "none";

    document.getElementById("kingp").style.display = "block";
    document.getElementById("king").style.display = "block";
}

function queen() {
    hide();
    show();
    dropbtn.innerHTML = "The Queen";
    queenb.style.display = "none";
    
    document.getElementById("queenp").style.display = "block";
    document.getElementById("queen").style.display = "block";
}

function pawn() {
    hide();
    show();
    dropbtn.innerHTML = "The Pawn";
    pawnb.style.display = "none";
    
    document.getElementById("pawnp").style.display = "block";
}