let images = ['tlu.png', 'logo.png', 'ajt.png'];
const folder = 'img/loader/';
let loadedImages = [];
let fileNames = [];

$(() => {
    //loadImages();
    animate();
});

function loadImages() {
    $.get(folder, function (data) {
        console.log(data);
    }).done(() => {
        getNames();
    });
}

function getNames() {
    let files = document.querySelectorAll("a.icon.file");
    files.forEach(function (item) {
        fileNames.push(item.textContent)
    })
    console.log(fileNames);
    animate();
}

function animate() {
    $("#loader").append("<div id='imgDiv'></div>");
    for(let i = 0; i < images.length; i++) {
        $("#imgDiv").empty().append("<img src='img/loader/" + images[i] + "' alt='animation image' id='loadingImg'>");
        $("#loadingImg").hide().fadeIn(2000).fadeOut(1000);
        console.log(i+". cycle done")
    }
    //$("#loader").fadeOut("slow");
}
