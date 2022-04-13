$("img").css({"width":"20vw", "height":"20vh"});
$("#picContainer").css({"padding":"5px"});
$("#fullscreen").css({"display": "none"});
let firstPic =  $("img.active").attr("src");
$(".bigImg").html('<img src="'+firstPic+'">');
$(".bigImg img").css({"width": "90vh"});
$("#picContainer img").click(function (){
    let currentPic = $("img.active");
    let selectedPic = $(this);
    currentPic.removeClass("active");
    selectedPic.addClass("active");
    console.log(selectedPic.attr("src"));
    $(".bigImg").html("<img src='"+selectedPic.attr("src")+"'>").hide().fadeIn(2000).slideUp(1000).slideDown(1000);
});

$(".next").click(picForward);
$(".prev").click(picBackward);
$(".enterFullscreen").click(function (){
    $("#fullscreen").fadeIn(600);
});
$(".exitFullscreen").click(function (){
    $("#fullscreen").fadeOut(600);
});

function picForward(){
    let currentPic = $("img.active");
    let selectedPic = currentPic.next();
    if (selectedPic.length == 0){
        selectedPic = $("#picContainer img").siblings().first();
    }
    currentPic.removeClass("active");
    selectedPic.addClass("active");
    $(".bigImg").html("<img src='"+selectedPic.attr("src")+"'>").hide().fadeIn(800);
};

function picBackward(){
    let currentPic = $("img.active");
    let selectedPic = currentPic.prev();
    if (selectedPic.length == 0){
        selectedPic = $("#picContainer img").siblings().last();
    }
    currentPic.removeClass("active");
    selectedPic.addClass("active");
    $(".bigImg").html("<img src='"+selectedPic.attr("src")+"'>").hide().fadeIn(800);
};

$(document).keydown(buttonPress);
function buttonPress(event){
    console.log(event.keyCode);
    if(event.keyCode == 39){
        picForward();
    }
    if(event.keyCode == 37){
        picBackward();
    }
    if(event.keyCode == 70){
        $("#fullscreen").fadeIn(600);
    }
    if(event.keyCode == 27){
        $("#fullscreen").fadeOut(600);
    }
}