//Global Scope
var slideIndex = 0;
var catCounterHolder = 0;
var oliverHolder = 0;
var oliverStart
var catStart
var catOn

//Cat SlideShow Function
const catSlideShow = () => {
    catOn = true;
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
    catStart = setTimeout(catSlideShow, 5000);
    document.getElementById("changeButton2").style.visibility = 'hidden';
};
//Oliver Slideshow Function
const oliverSlideShow = () => {
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
    oliverStart = setTimeout(oliverSlideShow, 5000);
};
//Start Button.
const startSlideShow = () => {
    if (catCounterHolder == 0) {
        disableButton();
    }
    if (oliverHolder == 0) {
        disableButton();
    }
    if (catOn === true) {
        catCounterHolder = 0;
        setTimeout(catSlideShow, 5000);
        doublePlay();
    }
    if (catOn === false) {
        oliverHolder = 0;
        setTimeout(oliverSlideShow, 5000);
    };
    console.log(catOn);
    console.log(catCounterHolder);
    console.log(oliverHolder);
};
//Pause Button
const pauseSlideShow = () => {

    if (catCounterHolder <= 1) {
        clearTimeout(catStart);
        catCounterHolder++;
        console.log(catCounterHolder);
    }
    if (oliverHolder <= 1) {
        clearTimeout(oliverStart);
        oliverHolder++;
        console.log(oliverHolder);
    }
    if (oliverHolder >= 1) {
        oliverHolder = 0
    }
    if (catCounterHolder >= 1) {
        catCounterHolder = 0
    };
};
//Change Slideshow Button
const changeSlideShow = () => {
    catCounterHolder = 0;
    oliverHolder++;
    clearTimeout(catStart);
    var catS = document.getElementById("slideContainer1");
    var displayButton = document.getElementById("changeButton");
    if (oliverHolder == 1) {
        catOn = false;
        catS.style.display = "none";
        doublePlay();
        oliverSlideShow();
    }
    if (catCounterHolder == 0) {
        displayButton.style.display = 'none';
    };
    oliverHolder = 0;
    console.log(catOn);
    console.log(catCounterHolder);
    console.log(oliverHolder);
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
    document.getElementById("startButton").disableButton = true;
};
//Display Button
const displayButton = () => {
    document.getElementById("changeButton2").style.visibility = 'visible';
};