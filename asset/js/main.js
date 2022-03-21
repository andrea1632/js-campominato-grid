//variabili globali
let grid = document.getElementById("grid");
let btn = document.getElementById("btn");
let select = document.getElementById("select");

btn.addEventListener("click",
function(){
    //condizioni per determinare la difficoltà scelta dall'utente
    if(select.value == "facile"){
        for(let i = 1; i <= 49; i++){
            let content = document.createElement("div");
            content.classList.add("boxEasy");
            content.innerHTML = i;
            grid.appendChild(content);
            //funzione per colorare il box al click
            content.addEventListener("click",
                function colorOnClick(){
                this.classList.add("bgLightBlue");
            })
        }
    } else if(select.value == "medio"){
        for(let i = 1; i <= 81; i++){
            let content = document.createElement("div");
            content.classList.add("boxMedium");
            content.innerHTML = i;
            grid.appendChild(content);
            //funzione per colorare il box al click
            content.addEventListener("click",
                function colorOnClick(){
                this.classList.add("bgLightBlue");
            })
        }
    } else if(select.value == "difficile"){
        for(let i = 1; i <= 100; i++){
            let content = document.createElement("div");
            content.classList.add("boxHard");
            content.innerHTML = i;
            grid.appendChild(content);
            //funzione per colorare il box al click
            content.addEventListener("click",
                function colorOnClick(){
                this.classList.add("bgLightBlue");
            })
        }
    }
}
)