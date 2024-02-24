
//SETAS DE CONTROLE
let controls = document.querySelectorAll(".control");
//

//QUANTIDADE DE CARROSEL
let currentItem = 0;
let items = document.querySelectorAll('.item');
//

//CONTADOR DE ITEMS
let maxItems = items.length;
//


controls.forEach(control => {
    control.addEventListener('click', ()=>{
        const isLeft = control.classList.contains('arrow-left');
        if(isLeft){
            currentItem -= 1; 
        } else{
            currentItem += 1;
        }

        if(currentItem >= maxItems){
            currentItem = 0;
        }

        if(currentItem < 0){
            currentItem = maxItems - 1;
        }

        items.forEach(item =>
             item.classList.remove('current-item'));

                items[currentItem].scrollIntoView({
                    inline: "center",
                    behavior: "smooth",
                });
                items[currentItem].classList.add("current-item");
    });
});
