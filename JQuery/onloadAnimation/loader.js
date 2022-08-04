class Loader {

    constructor() {
        this.images = new Array();
        this.preload();
    }

    preload() {
        $(window).on("load", () => {
            if (sessionStorage.getItem("loaderPlayed") === null) {
                $("#preloader").fadeOut(1000, () => {
                    this.loadImages();
                });
            } else {
                $("#loader").hide();
                $("#preloader").fadeOut(500);
            }
        });
    }

    loadImages() {
        $.get("server.php", (data) => {
            if (data !== "") {
                this.images = JSON.parse(data);
                console.log(this.images);
            }
        }).done(() => {
            this.animate();
        });
    }

    //need to fix 'for' cycle animation
    animate() {
        for (let i = 0; i < this.images.length; i++) {
            $('#loader').append('<img src="img/loader/' + this.images[i] + '" alt="animation image" id="loadingImg">');
            $('#loadingImg').hide().fadeIn(2000);
            $("#loadingImg").fadeOut(2000, () => {
                console.log(i + 1 + "/" + this.images.length);
            }).promise().done(() => {
                $("#loader").empty();
                $("#loader").fadeOut(2000);
                sessionStorage.setItem("loaderPlayed", true);
            });
        }
    }
}

let loader = new Loader();