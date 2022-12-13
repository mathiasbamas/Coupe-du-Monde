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