document.addEventListener("DOMContentLoaded", function() {
    // Arrays para almacenar las imágenes de cada sección
    var imgSources = [
        "https://tinyurl.com/2dj239aw",
        "https://tinyurl.com/2bsf8cvf",
        "https://tinyurl.com/25u9tmts",
        "https://tinyurl.com/294t6fcd"
    ];

    function randomizeSlides(containerId) {
        var container = document.getElementById(containerId);
        var slides = container.getElementsByClassName("mySlides");
        var randomIndex = Math.floor(Math.random() * imgSources.length);
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[randomIndex].style.display = "block";
    }

    // Llamar a la función para cada sección
    randomizeSlides("div-img-navegadores");
    randomizeSlides("div-img-buscadores");
    randomizeSlides("div-img-blocs");

    // Mostrar los controles para los slideshows
    function plusDivs(n, containerId) {
        var container = document.getElementById(containerId);
        var slides = container.getElementsByClassName("mySlides");
        var currentSlideIndex = Array.from(slides).findIndex(slide => slide.style.display === "block");
        slides[currentSlideIndex].style.display = "none";
        var newIndex = (currentSlideIndex + n + slides.length) % slides.length;
        slides[newIndex].style.display = "block";
    }

    function currentDiv(n, containerId) {
        var container = document.getElementById(containerId);
        var slides = container.getElementsByClassName("mySlides");
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[n - 1].style.display = "block";
    }

    window.plusDivs = plusDivs;
    window.currentDiv = currentDiv;
});
