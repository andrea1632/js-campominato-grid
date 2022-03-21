let grid = document.getElementById("grid");
let btn = document.getElementById("btn");
let select = document.getElementById("select");

btn.addEventListener("click",
function(){
    if(select.value == "facile"){
        for(let i = 1; i <= 49; i++){
            grid.innerHTML += `<div class="box">${i}</div>`
        }
    } else if(select.value == "medio"){
        for(let i = 1; i <= 81; i++){
            grid.innerHTML += `<div class="box">${i}</div>`
        }
    } else if(select.value == "difficile"){
        for(let i = 1; i <= 100; i++){
            grid.innerHTML += `<div class="box">${i}</div>`
        }
    }
}
)