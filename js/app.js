var btn = document.getElementById("menu-button");
var mainMenu = document.getElementById("mobile-menu");

mainMenu.style.display = "none";

    function toggleMenu(){
    if(mainMenu.style.display === "flex"){
        mainMenu.style.display = "none";

    } else{
        mainMenu.style.display = "flex";
        mainMenu.classList.add("adicional");
    }

}

btn.addEventListener("click", toggleMenu);

window.addEventListener("resize", function(){
    if(window.innerWidth <= 721){
        mainMenu.style.display = "none";
    }
})
