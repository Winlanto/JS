let date = new Date();
// console.log(date);
let day = date.getDay();
let year = date.getFullYear();
let month = date.getMonth();
// let time = date.getTime();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let currentDate = date.getDate();
let days = ["Pühapäev", "Esmaspäev", "Teisipäev","Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
let fontSize = 13;
updateData();
// document.getElementById("day").innerHTML = days[day];
// document.getElementById("year").innerHTML = year;
// document.getElementById("month").innerHTML = months[month];
// document.getElementById("date").innerHTML = currentDate;
// document.getElementById("hours").innerHTML = hours+":";
// document.getElementById("minutes").innerHTML = minutes+":";
// document.getElementById("seconds").innerHTML = seconds;
window.setInterval(updateData, 1000);
document.getElementById("smaller").addEventListener("click", function (){
    fontSize--;
    document.getElementById("container").style.fontSize = fontSize+"px";
});
document.getElementById("bigger").addEventListener("click", function (){
    fontSize++;
    document.getElementById("container").style.fontSize = fontSize+"px";
});
function updateData() {
    date = new Date();
    day = date.getDay();
    year = date.getFullYear();
    month = date.getMonth();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    currentDate = date.getDate();
    if(hours<10){hours = "0"+hours;}
    if(minutes<10){minutes = "0"+minutes;}
    if(seconds<10){seconds= "0"+seconds;}
    if(seconds<10){seconds= "0"+seconds;}
    if(date<10){date= "0"+date;}
    document.getElementById("hours").innerHTML = hours+":";
    document.getElementById("minutes").innerHTML = minutes+":";
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("day").innerHTML = days[day]+"\&nbsp";
    document.getElementById("date").innerHTML = currentDate+".\&nbsp";
    document.getElementById("month").innerHTML = months[month]+"\&nbsp";
    document.getElementById("year").innerHTML = year;

}
