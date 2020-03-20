var images = [];

var indicators = document.querySelectorAll(".gallery-wrapper .gallery-indicators img");
indicators.forEach((value) => {
    images.push(value);
});

currentSlide = 0;
maxSlides = 5;

window.onload = function () {
    setupSlider();
};

function setupSlider() {
    var slide = document.getElementById('gallery-slide');
    var controlLeft = document.getElementsByClassName('gallery-control-prev')[0];
    var controlRight = document.getElementsByClassName('gallery-control-next')[0];

    setSlide(0);

    var slideTimer = setInterval(function () {
        changeSlide(1);
    }, 10000);

    for (var i = 0; i < indicators.length; i++) {
        images.push(indicators[i]);
        indicators[i].addEventListener('click', function (e) {
            var slide = document.getElementById('gallery-slide');

            currentSlide = i;
            slide.setAttribute("object-align", e.currentTarget.getAttribute('object-align'));
            slide.src = e.currentTarget.src;

            clearInterval(slideTimer);
            slideTimer = setInterval(function () {
                changeSlide(1);
            }, 10000);
        });
    }

    controlLeft.addEventListener('click', function () {
        changeSlide(-1);
        clearInterval(slideTimer);
        slideTimer = setInterval(function () {
            changeSlide(1);
        }, 10000);
    });
    controlRight.addEventListener('click', function () {
        changeSlide(1);
        clearInterval(slideTimer);
        slideTimer = setInterval(function () {
            changeSlide(1);
        }, 10000);
    });

    function changeSlide(byAmount) {
        currentSlide += byAmount;

        if (currentSlide < 0 || currentSlide >= maxSlides) {
            currentSlide = Math.abs(currentSlide) - (Math.floor(Math.abs(currentSlide) / maxSlides) * maxSlides);
        }

        slide.setAttribute("object-align", images[currentSlide].getAttribute("object-align"));
        slide.src = images[currentSlide].src;
    }
    function setSlide(byAmount) {
        currentSlide = byAmount;

        if (currentSlide < 0) {
            currentSlide = 0;
        } else if (currentSlide >= maxSlides) {
            currentSlide = maxSlides;
        }

        slide.setAttribute("object-align", images[currentSlide].getAttribute("object-align"));
        slide.src = images[currentSlide].src;
    }
}