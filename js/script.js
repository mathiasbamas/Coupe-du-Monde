function afficheMenuDeroulant(){
    var x = document.getElementsByTagName("nav")[0]
    if(x.className === "menu-close"){
        x.className = "menu-open"
        document.getElementsByTagName("body")[0].style.overflow="hidden"
    }
    else{
        x.className = "menu-close";
        document.getElementsByTagName("body")[0].style.overflow="visible"
    }
}

var i = 0;

function nextTeam(){
    var x = document.getElementsByClassName("equipe-container")
    x[i].style.display="none";
    if(i < x.length - 1){
        ++i
    }
    var x = document.getElementsByClassName("equipe-container")
    x[i].style.animation="0.5s slideFromLeft";
    x[i].style.display="flex";

    if(i === x.length - 1){
        var boutonSuivant = document.getElementById("nextTeam")
        boutonSuivant.style.backgroundColor="gray"
        boutonSuivant.style.opacity="0.2"
    }
    var boutonPrecedent = document.getElementById("previousTeam")
    boutonPrecedent.style.backgroundColor="#c5c73b"
    boutonPrecedent.style.opacity="1"
}

function previousTeam(){
    if(i > 0){
        var x = document.getElementsByClassName("equipe-container")
    x[i].style.display="none";
    --i
    var x = document.getElementsByClassName("equipe-container")
    x[i].style.animation="0.5s slideFromRight";
    x[i].style.display="flex";
    }

    if(i === 0){
        var boutonSuivant = document.getElementById("previousTeam")
        boutonSuivant.style.backgroundColor="gray"
        boutonSuivant.style.opacity="0.2"
    }
    var boutonSuivant = document.getElementById("nextTeam")
    boutonSuivant.style.backgroundColor="#c5c73b"
    boutonSuivant.style.opacity="1"

}
    