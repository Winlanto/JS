let main = document.getElementById("main");
let red = document.getElementById("red");
let green = document.getElementById("green");
let blue = document.getElementById("blue");

window.addEventListener("change", changeColor);
window.addEventListener("input", changeColor);

// window.addEventListener("click", function (){
//     main.style.backgroundColor = "purple";
// });

window.addEventListener("keypress", selelctColor);

function changeColor() {
    const r = red.value;
    const g = green.value;
    const b = blue.value;
    main.style.backgroundColor = "rgb("+r+","+g+","+b+")";
}

function selelctColor(e) {
    console.log(e.key);
    if(e.key == "c"){
        const r = Math.round(Math.random()*255);
        const g = Math.round(Math.random()*255);
        const b = Math.round(Math.random()*255);
        main.style.backgroundColor = "rgb("+r+","+g+","+b+")";
    }
}