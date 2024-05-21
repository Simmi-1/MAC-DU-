//functions to help slideshow
let currentSlideIndex = 0;
let slideshowDelay = 4000; //milliseconds
let imageGalleryBeingHovered = false;

//function to display the nth picture in the slideshow
// 0 <= n <= max_images_in_image_gallery
function displayNthIndexImage(n) {
    var slideWindow = document.querySelector(".slideShow--slide");
    var images = getSlideAbleImages();

    if (n >= 0 && n <= images.length) {
        slideWindow.firstElementChild.setAttribute("src", images[n].getAttribute("src"));
        currentSlideIndex = n;
        //change the displayed slide number
        document.querySelector(".slideshow__index").innerHTML = currentSlideIndex + 1 + "/" + images.length;
        //change the displayed caption
        document.querySelector(".slideshow__caption").innerHTML = images[n].getAttribute("alt");
    }
}

// function that returns the array of all the images available to be presented as a slideshow
function getSlideAbleImages() {
    return document.querySelectorAll(".slideShow--imageGallery img");
}

//function to perform sliding the image gallery to cope with the image being displayed
function performSlidingAnimation(index) {
    var imageGallery = document.querySelector(".slideShow--imageGallery");
    imageGallery.scroll(0, imageGallery.scrollHeight / getSlideAbleImages().length * currentSlideIndex - 25);
    //also remove the overlay of that element
    imageGallery.querySelectorAll("div")[index].classList.remove("overlay");
    setTimeout(function () {
        imageGallery.querySelectorAll("div")[index].classList.add("overlay");
    }, slideshowDelay)
}

//to automatically slide-'show':
function performSlideshow(delay) {
    if (!imageGalleryBeingHovered) {
        if (currentSlideIndex + 1 >= getSlideAbleImages().length) {
            displayNthIndexImage(0);
        } else {
            displayNthIndexImage(currentSlideIndex + 1);
        }
        performSlidingAnimation(currentSlideIndex);
    }
    setTimeout(function () {
        performSlideshow(slideshowDelay);
    }, slideshowDelay);
}

function showHoveredSlideInShow() {
    var images = document.querySelectorAll(".slideShow--imageGallery div");
    document.querySelector(".slideShow").addEventListener("mouseenter", function () {
        imageGalleryBeingHovered = true;
    });
    document.querySelector(".slideShow").addEventListener("mouseleave", function () {
        imageGalleryBeingHovered = false;
    });
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function () {
            displayNthIndexImage(i);
        });
        images[i].addEventListener("mouseenter", function () {
            images[i].classList.remove("overlay");
            ;
        });
        images[i].addEventListener("mouseleave", function () {
            images[i].classList.add("overlay");
            ;
        });
    }
}

//function to change the slide when button is clicked
function changeSlideOnButtonPress() {
    document.querySelector(".slideshow__navigation-button--left").addEventListener('click', function () {
        displayNthIndexImage(currentSlideIndex - 1 < 0 ? getSlideAbleImages().length - 1 : currentSlideIndex - 1);
    });
    document.querySelector(".slideshow__navigation-button--right").addEventListener('click', function () {
        displayNthIndexImage(currentSlideIndex + 1 >= getSlideAbleImages().length ? 0 : currentSlideIndex + 1);
    });
}

//++++++++++++++++++++++FOR NAVIGATION BAR IN MOBILE WINDOWS++++++++++++++++++
function fascilateResponsiveMobileNavbar(labelName, subListName) {

    document.querySelector(labelName).addEventListener('click', function () {
        if (window.innerWidth < 900)
            document.querySelector(subListName).classList.toggle("displayNone");
    });
}

//we do not want displayBlock class when window is above 900px width{
function removeDisplayBlockOnResize(classes, classToBeRemoved, classToBeAdded) {
    window.onresize = function () {
        if (window.innerWidth > 900) {
            for (let i = 0; i < classes.length; i++) {
                console.log("yello");
                document.querySelector(classes[i]).classList.remove(classToBeRemoved);
                document.querySelector(classes[i]).classList.add(classToBeAdded);
            }
        }
    }
}

function main(args) {
    //to start the slideshow
    setTimeout(function () {
        performSlideshow(slideshowDelay);
    }, slideshowDelay);
    showHoveredSlideInShow();
    changeSlideOnButtonPress();
    fascilateResponsiveMobileNavbar("#hamBurgerCheckbox", ".menu-options__container");
    fascilateResponsiveMobileNavbar(".academicsLabel", ".academicsSubList");
    fascilateResponsiveMobileNavbar(".societyLabel", ".societySubList");
    fascilateResponsiveMobileNavbar(".eventsAndTripsLabel", ".eventsAndTripsSubList");
    fascilateResponsiveMobileNavbar(".departmentLabel", ".departmentSulList");
    fascilateResponsiveMobileNavbar(".scienceCoursesLabel", ".scienceCoursesSubList");
    fascilateResponsiveMobileNavbar(".artsLabel", ".artsSubList");
    fascilateResponsiveMobileNavbar(".commerceCoursesLabel", ".commerceCoursesSubList");
    removeDisplayBlockOnResize([".academicsSubList", ".societySubList", ".eventsAndTripsSubList", ".departmentSulList", ".scienceCoursesSubList",".artsSubList",".commerceCoursesSubList"], "displayBlock", "displayNone")

}

main();