$(document).ready(function () {
    const navbar = document.querySelector("#navbar");

    let lastScroll = 0;

    if (window.pageYOffset == 0) {
        $("#scroll-top").fadeOut("slow")
    }

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll != navbar.offsetTop) {
            navbar.classList.add("sticky");
        }

        if (currentScroll <= 0) {
            navbar.classList.remove("sticky");
            navbar.classList.remove("scroll-up");
            $("#scroll-top").fadeOut("slow")
            return;
        }

        if (currentScroll > lastScroll && !navbar.classList.contains("scroll-down")) {
            navbar.classList.remove("scroll-up");
            navbar.classList.add("scroll-down");
            $("#scroll-top").fadeIn("slow")
        } else if (
            currentScroll < lastScroll &&
            navbar.classList.contains("scroll-down")
        ) {
            navbar.classList.remove("scroll-down");
            navbar.classList.add("scroll-up");
        }
        lastScroll = currentScroll;
    });

    var imagesLoaded = 0;
    var totalImages = $("img").length;

    if (totalImages == 0) {
        $(".loader").fadeOut("slow");
        return false;
    }

    $("img").each(function (idx, img) {
        $("<img>").on("load", imageLoaded).attr("src", $(img).attr("src"));
    });

    function imageLoaded() {
        imagesLoaded++;
        if (imagesLoaded == totalImages) {
            allImagesLoaded();
            return false;
        }
    }

    function allImagesLoaded() {
        setTimeout(() => {
            $(".loader").fadeOut("slow");
        }, 2000);
    }
});