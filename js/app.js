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

const navbarMenu = document.getElementsByTagName('li'); // NAVBAR 

const newPost = document.querySelector('[id=section4]'); // Comments section - hidden by default
const comments = document.getElementById('section-4');
comments.style = "display: none"

const newSpanElem = document.createElement('p');

const myTextInput = document.getElementById('myTextInput');
const nameInput = document.getElementById('nameInput');

const buttonPhoto = document.getElementById('buttonPhoto');


const listSectors = document.querySelectorAll('p'); // just for testing styles design


//Main text decoration

for (let i = 0; i < listSectors.length; i++) {
    listSectors[i].addEventListener('mouseover', () => {
        listSectors[i].style = 'box-shadow: 0.2em 0.2em 0.3em 0.5em silver; padding: 2em; border-radius: 0.3em';
    });
    listSectors[i].addEventListener('mouseout', () => {
        listSectors[i].style = "none";
    });
}

/** 
 * End Global Variables
 * Start Helper Functions
 * 
 */


// Smooth rooling - rollout nav
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("nav").style.top = "0";
    } else {
        document.querySelector("nav").style.top = "-25em";
    }
    prevScrollpos = currentScrollPos;
}


// Posting comment
let inputFields = document.getElementsByClassName('posting__container')[0];
inputFields.addEventListener('click', (e) => {
    if (e.target.tagName = "INPUT") {
        e.target.style = "background-color: rgb(181, 252, 185); border: solid: 0.5em #333";
    }
});


myButton.addEventListener("click", () => {
    if (myTextInput.value && nameInput.value) {
        newPost.insertAdjacentHTML('beforeend', myTextInput.value + '\n' + nameInput.value + '<br><br>');
        comments.style = "display: inline";
        window.alert("Much appreceated! We like reading your writings! ;-)")
        myTextInput.value = "";
        nameInput.value = "";
    } else {
        window.alert("Please fill in all sections");
    }
})

//Button mouseover effects



// NAVbar hover effects
for (let i = 0; i < listSectors.length; i++) {
    navbarMenu[i].addEventListener('mouseover', () => {
        navbarMenu[i].style = 'background-color: coral; padding: 0 1em 0; border-radius: 0.3em; border-style: outset';
    });
    navbarMenu[i].addEventListener('mouseout', () => {
        navbarMenu[i].style = "none";
    });
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