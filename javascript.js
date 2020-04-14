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
//Start Slideshow w/button.
const startSlideShow = () => {
    console.log(catCounterHolder);
    console.log(oliverHolder);
    if (catCounterHolder == 0) {
        disableButton();
    }
    if (oliverHolder == 0) {
        disableButton();
    }
    if (catCounterHolder = 1) {
        catCounterHolder = 0;
        setTimeout(catSlideShow, 5000);
        doublePlay();
    }
    if (oliverHolder = 1) {
        oliverHolder = 0;
        setTimeout(oliverSlideShow, 5000);
    }
};
//Pause Button and Cat Counter
const pauseSlideShow = () => {

    if (catCounterHolder >= 0) {
        clearTimeout(catStart);
        catCounterHolder++;
        console.log(catCounterHolder);
    }
    if (oliverHolder >= 0) {
        clearTimeout(oliverStart);
        oliverHolder++;
        console.log(oliverHolder);
    }
    if (oliverHolder >= 1 && catCounterHolder >= 1) {
        oliverHolder = 0
        catCounterHolder = 0
    };
};
//Change Slideshow Button
const changeSlideShow = () => {
    slideIndex = 0;
    catCounterHolder = 0;
    oliverHolder++;
    clearTimeout(catStart);
    var oliverS = document.getElementById("slideContainer1");
    var displayButton = document.getElementById("changeButton");
    if (oliverHolder == 1) {
        oliverS.style.display = "none";
        oliverSlideShow();

    }
    if (catCounterHolder == 0) {
        displayButton.style.display = 'none';
    };

};
//Stop double play
const doublePlay = () => {
    var doubleP = document.getElementById("slideContainer2");
    if (catOn = true) {
        doubleP.style.display = "none";
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