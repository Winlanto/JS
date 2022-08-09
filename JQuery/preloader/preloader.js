class Preloader {

    constructor() {
        this.images = [];
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
                $("#preloader").fadeOut(1000);
            }
        });
    }

    loadImages() {
        $.get("preloader.php", (data) => {
            if (data !== "") {
                this.images = JSON.parse(data);
                console.log(this.images);
            }
        }).done(() => {
            for (let i = 0; i < this.images.length; i++) {
                setTimeout(() => {
                    this.animate(i);
                }, i * 3000);
            }
            setTimeout(() => {
                $('#loader').empty().fadeOut(1000);
                sessionStorage.setItem("loaderPlayed", 'true');
            }, this.images.length * 3000);
        });
    }

    animate(i) {
        let img = '#loaderImg' + i;
        $('#loader').append('<img src="img/loader/' + this.images[i] + '" alt="animation image" id="loaderImg' + i + '">');
        $(img).hide().fadeIn(1500, "swing").fadeOut(1500, "swing");
    }
}

new Preloader();