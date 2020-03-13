/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */

const newPost = document.querySelector('[id=section4]');
const comments = document.getElementById('section-4');
comments.style = "display: none"

const newSpanElem = document.createElement('p');

const myTextInput = document.getElementById('myTextInput');
const nameInput = document.getElementById('nameInput');

const myPhotoInput = document.querySelector('#myPhotoInput').value;

const myButton = document.getElementById('myButton');
const buttonPhoto = document.getElementById('buttonPhoto');

/** 
 * End Global Variables
 * Start Helper Functions
 * 
 */


// Smooth roolin - rollout nav
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("nav").style.top = "0";
    } else {
        document.querySelector("nav").style.top = "-5em";
    }
    prevScrollpos = currentScrollPos;
}


// Posting comment
const node = document.createTextNode(myTextInput);
newSpanElem.appendChild(node);
newSpanElem.appendChild(node);


myButton.addEventListener("click", () => {
    newPost.insertAdjacentHTML('beforeend', myTextInput.value + '\n' + nameInput.value + '<br><br>');
    comments.style = "display: inline-block";
    myTextInput.value = "";
    nameInput.value = "";
})

// Posting picture on comment

buttonPhoto.addEventListener("click", () => {
    newPost.insertAdjacentHTML('beforeend', myPhotoInput + "<br><br>");
    myPhotoInput.style = "height: 50%";
});


// hover decoration for articles
document.querySelector('div').addEventListener('mouseenter', () => {
    let sections = document.querySelectorAll('div > p');
    for (i = 0; i < sections.length; i++) {
        sections[i].style = "border: outset 1px grey; border-radius: 1em; box-shadow: 1px 1px 1px black";
    }
});
document.querySelector('div p').addEventListener('mouseleave', () => {
    let sections = document.querySelectorAll('div > p');
    for (i = 0; i < sections.length; i++) {
        sections[i].style = "none";
    }
});





/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click



// Set sections as active






// }