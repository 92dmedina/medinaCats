//Global Scope
var slideIndex = 0;
var catCounterHolder = 0;
var oliverHolder = 0;
var oliverStart
var catStart
var catOn
var oliverOn = false;
//Cat SlideShow Function
const catSlideShow = () => {
    catOn = true;
    oliverOn = false;
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
    catStart = setTimeout(catSlideShow, 4000);
};
//Oliver Slideshow Function
const oliverSlideShow = () => {
    oliverOn = true;
    catOn = false;
    var i;
    var slides = document.getElementsByClassName("oliverSlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1, true;
    };
    slides[slideIndex - 1].style.display = "block";
    oliverStart = setTimeout(oliverSlideShow, 4000);
};
//Start Button.
const startSlideShow = () => {
    if (catCounterHolder === 0) {
        disableButton();
    }
    if (oliverHolder === 0) {
        disableButton();
    }
    if (catCounterHolder === 1) {
        catCounterHolder -= 1;
        setTimeout(catSlideShow, 4000);
    }
    if (oliverHolder === 1) {
        oliverHolder -= 1;
        setTimeout(oliverSlideShow, 4000);
    };
    console.log(catCounterHolder);
    console.log(oliverHolder);
};
//Pause Button
const pauseSlideShow = () => {
    if (catOn === true) {
        catCounterHolder = 1;
        clearTimeout(catStart);
    } else {
        oliverHolder = 1;
        clearTimeout(oliverStart);
    };
    console.log(catCounterHolder);
    console.log(oliverHolder);
};
//Change Slideshow Button
const changeSlideShow = () => {
    console.log(oliverOn);
    var catS = document.getElementById("slideContainer1");
    if (oliverOn === false) {
        clearTimeout(catStart);
        catS.style.display = "none";
        oliverSlideShow();
        doublePlay();
    } else {
        clearTimeout(oliverStart);
        catS.style.display = "block";
        catSlideShow();
        doublePlay();
    };
    console.log(oliverOn);
};
//Stop double play
const doublePlay = () => {
    var doubleP = document.getElementById("slideContainer2");
    if (catOn === true) {
        doubleP.style.display = "none";
    } else {
        doubleP.style.display = "block";
    };
};
//Disable Button
const disableButton = () => {
    if (catOn === true)
        document.getElementById("startButton").disableButton = true;
};