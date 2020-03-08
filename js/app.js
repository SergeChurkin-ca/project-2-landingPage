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

var sectionOne = document.getElementById('section1');
var sectionTwo = document.getElementById('section2');
var sectionThree = document.getElementById('section3');

let sections = document.querySelectorAll('div > p');
let i;
for (i = 0; i < sections.length; i++) {
    sections[i].style.backgroundColor = 'orange';
}
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */


// Styling section on mouseover

sections.addEventListener('mouseenter', function() {
    sections.style = "border: outset 1px grey; border-radius: 1em; box-shadow: 2px 2px 2px black";
});

sections.addEventListener('mouseleave', function() {
    sections.style = "none";
});

// Smooth roolin - roolout nav
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