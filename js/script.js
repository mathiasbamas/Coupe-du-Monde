/* Fonction permettant d'ouvrir et fermer le menu sur mobile
   la navbar a la classe "menu-open" quand elle et ouverte et "menu-close" quand elle est fermée"
*/ 

function afficheMenuDeroulant(){
    var navbar = document.getElementsByTagName("nav")[0]
    if(navbar.className === "menu-close"){
        navbar.className = "menu-open"
        document.getElementsByTagName("body")[0].style.overflow="hidden"
    }
    else{
        navbar.className = "menu-close";
        document.getElementsByTagName("body")[0].style.overflow="visible"
    }
}

var numPageEquipe = 0; /* Numero de la page dans le fenetre equipe */

/* Fonction qui permet de changer de page 
   -1 -> page precedente
   1 -> page suivante 
*/

function changePage(page){
    var container = document.getElementsByClassName("equipe-container")
    if(numPageEquipe+page >= 0 && numPageEquipe+page < container.length) /* Si on ne sort pas des limites on change de page */
    {
        container[numPageEquipe].style.display="none";
        numPageEquipe += page;
    }

    /* Changement de drapeau avec un sprite (160px par drapeau) */
    var flag = document.getElementsByClassName("flag");
    flag[numPageEquipe].style.backgroundPosition = -numPageEquipe*160 + "px 0"
    container[numPageEquipe].style.display="block";


    /* Transition vers la droite ou la gauche  */
    if(page > 0)
    {
        container[numPageEquipe].style.animation="0.5s slideFromLeft";
    }
    else
    {
        container[numPageEquipe].style.animation="0.5s slideFromRight";
    }
    var boutonPrecedent = document.getElementById("previousTeam");
    var boutonSuivant = document.getElementById("nextTeam");


    /* Si on atteint une extrémité -> bouton grisé */
    if(numPageEquipe === 0){
        boutonPrecedent.style.backgroundColor="gray"
        boutonPrecedent.style.opacity="0.2"
    }else{
        boutonPrecedent.style.backgroundColor="#c5c73b"
        boutonPrecedent.style.opacity="1"
    }

    if(numPageEquipe === container.length - 1)
    {
        boutonSuivant.style.backgroundColor="gray"
        boutonSuivant.style.opacity="0.2"
    }else{
        boutonSuivant.style.backgroundColor="#c5c73b"
    boutonSuivant.style.opacity="1"
    }
}

function envoyerUnEmail() {
    var params = {
        name: document.getElementById("nom").value + " " + document.getElementById("prenom"), 
        email: document.getElementById("email").value, 
        message: document.getElementsByName("avis").value,
    }
    emailjs.send("service_a2zj8rt","template_o2n887g",params);

    document.getElementById("nom").value = ""
    document.getElementById("prenom").value = ""
    document.getElementById("email").value = ""
    document.getElementById("avis").value = ""

    var fenetre = document.getElementById("validation-popup");
    fenetre.style.display = "flex";
}
    
function fermerFenetre(){
    var fenetre = document.getElementById("validation-popup");
    fenetre.style.display = "none";
}

var pageAcceuil = 0;

function changePageAcceuil(page){
    var listePage = document.getElementsByClassName("annee-container")
    if(pageAcceuil+page < 0 || pageAcceuil+page > listePage.length-1) return
    listePage[pageAcceuil].style.display = "none"
    pageAcceuil += page
    listePage[pageAcceuil].style.display = "flex"

    if(page > 0)
    {
        listePage[pageAcceuil].style.animation="0.5s slideFromLeft";
    }
    else
    {
        listePage[pageAcceuil].style.animation="0.5s slideFromRight";
    }
}

function changeAcceuilStyle(nom){
    document.getElementById('style').setAttribute('href', nom)
}

