let blurb = "";
let piece = "";

function king() {
    piece = "king";
    checkPiece();
}

function checkPiece() {
    if(piece==="king"){
        blurb = "The King is the piece you must protect.";
    }

    document.getElementById("piece").innerHTML = blurb;
}