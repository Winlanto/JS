let d = new Date();
let year = d.getFullYear();
let enteredYear;

$("#year").keyup(function (){
    let inputYear = $(this).val();
    if(inputYear.length >= 4) {
        if (inputYear > year) {
            inputYear = year;
        }
    }
    if(inputYear<(year-110) && inputYear.length>=4){
        inputYear = year-110;
    }
    $("#year").val(inputYear);
    enteredYear = JSON.parse($("#year").val());
});

$("#radioContainer input").click(function (){
    let currentGender = $("input.active");
    let selectedGender = $(this);
    currentGender.removeClass("active");
    selectedGender.addClass("active");
});

$("#btnInput").click(function (){
    let gender = $("#radioContainer input.active").attr("id");
    if (gender == "woman"){
        $("#pensionResult").html("Pensioonini aega jäänud: ");
        $("#pensionResult").append(document.createTextNode((enteredYear-year)+63));
    }if (gender == "man"){
        $("#pensionResult").html("Pensioonini aega jäänud: ");
        $("#pensionResult").append(document.createTextNode((enteredYear-year)+65));
    }
});

