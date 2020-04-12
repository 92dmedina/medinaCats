//Global Scope
var slideIndex = 0;
//SlideShow Function
const catSlideShow = () => {
    var i;
    var slides = document.getElementsByClassName("catSlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1, true;
    };
    slides[slideIndex - 1].style.display = "block";
    start = setTimeout(catSlideShow, 7000);
};
//Start Slideshow w/button.
const startSlideShow = () => {
    if (catCounterHolder == 0) {
        disableButton()
    } else {
        catCounterHolder -= 1;
        setTimeout(catSlideShow, 7000);
        console.log(catCounterHolder);
    };
};
//Pause Button and Cat Counter
var catCounterHolder = 0;
const pauseSlideShow = () => {
    if (catCounterHolder <= 0) {
        clearTimeout(start)
        catCounterHolder += 1;
        console.log(catCounterHolder);
    };
};
//Disable Button
const disableButton = () => {
    document.getElementById("startButton").disableButton = true;
};