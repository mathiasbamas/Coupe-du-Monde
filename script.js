function afficheMenuDeroulant(){
    var x = document.getElementsByTagName("nav")[0]
    if(x.className === "menu-close"){
        x.className = "menu-open"
    }
    else{
        x.className = "menu-close";
    }
}