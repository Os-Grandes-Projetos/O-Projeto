var btn = document.getElementById("menu-button");
var mainMenu = document.getElementById("mobile-menu");

btn.addEventListener("click", function(){
    if(mainMenu.style.display === "flex"){
        mainMenu.style.display = "none"
    } else{
        mainMenu.style.display = "flex"
    }
})