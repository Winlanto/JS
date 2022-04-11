let first = document.getElementById('first');
let second = document.getElementById("second");
let third;
let fifth = ["apple", "banana", "orange", "kiwi"];
let fruits = document.getElementById("fruits");
console.log(fifth);
console.log(fifth[1]);
for(let i = 0; i < fifth.length; i++){
    const node = document.createElement("LI");
    node.innerHTML = fifth[i];
    fruits.appendChild(node);
}
first.style.backgroundColor = "blue";
first.style.fontSize = "2em";
first.innerHTML = "Siin on uus sisu esimele elemendile";
// second.style.display = "none";
second.textContent = "Proovime seda muuta";
//third.value = "Uus väärtus";
function updateThird(){
    third = parseFloat(document.getElementById("third").value);
    console.log("third: "+third);
}function updateFourth(){
    let fourth = parseFloat(document.getElementById("fourth").value);
    console.log("fourth: "+fourth);
}function calcucate() {
    let fourth = parseFloat(document.getElementById("fourth").value);
    console.log(third + fourth);
    second.innerHTML = third + fourth;
}