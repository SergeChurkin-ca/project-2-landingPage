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

const section = document.querySelectorAll('section');
const listSectors = document.querySelectorAll('.landing__container'); // just for testing styles design


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

//Items of NAVBAR
const navbarMenu = () => {
    for (let i = 0; i <= 3; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.classList.add('menu__link');
        a.setAttribute('href', `#section${i + 1}`);
        li.textContent = `Section ${i + 1}`;
        const navigation = document.getElementById('navbar__list');
        navigation.appendChild(li);
        if (i === 3) {
            li.textContent = `Comments`;
        };
        li.appendChild(a);
        li.addEventListener('mouseover', () => {
            li.style = "background-color: coral; border-radius: 0.5em; border: solid 0.1em";
            listSectors[i].style = 'padding: 0 1em 0; border-radius: 0.3em; border-style: outset; box-shadow: 0.5em 0.5em 0.5em 0.2em white; transition: ease 0.5s';
        });
        li.addEventListener('mouseout', () => {
            li.style = "none";
            listSectors[i].style = 'none';
        });
    }
};
navbarMenu();



const yourActiveClass = document.getElementsByClassName('your-active-class')



const myTextInput = document.getElementById('myTextInput');
const nameInput = document.getElementById('nameInput');
const newPost = document.createElement('newPost');


const comments = document.getElementById('seciton4');

const myButton = document.getElementById('myButton');



// Posting comment
let inputFields = document.getElementsByClassName('posting__container')[0];
inputFields.addEventListener('click', (e) => {
    if (e.target.tagName = "INPUT") {
        e.target.style = "background-color: rgb(181, 252, 185); border: solid: 0.5em #333";
    }
});


myButton.addEventListener("click", () => {
    if (myTextInput.value && nameInput.value) {
        section4.insertAdjacentHTML('beforeend', myTextInput.value + '\n\n' + `<i>${nameInput.value}</i>` + '<br><br>');
        window.alert("Much appreceated! We like reading your writings! ;-)");
        myTextInput.value = "";
        nameInput.value = "";
    } else {
        window.alert("Please fill in all sections");
    }
});




// Main content secitons




/** 
 * End Global Variables
 * Start Helper Functions
 * 
 */



// Posting button style
myButton.addEventListener('mouseover', () => {
    myButton.style = "box-shadow: 0.3em 0.3em 0.3em grey; color: white";
});
myButton.addEventListener('mouseout', () => {
    myButton.style = "none";
});



// NAVbar + Sections hover effects

/* for (let i = 0; i < listSectors.length; i++) {
    navbarMenu[i].addEventListener('mouseover', () => {
        navbarMenu[i].style = 'background-color: coral; padding: 0 1em 0; border-radius: 0.3em; border-style: outset';
        listSectors[i].style = 'box-shadow: 0.2em 0.2em 0.3em 0.5em silver; padding: 2em; border-radius: 0.3em';
    });
    navbarMenu[i].addEventListener('mouseout', () => {
        navbarMenu[i].style = "none";
        listSectors[i].style = "none";
    });
} */


/* for (let i = 0; i < listSectors.length; i++) {
    listSectors[i].addEventListener('mouseover', () => {
        listSectors[i].style = 'padding: 0 1em 0; border-radius: 0.3em; border-style: outset; box-shadow: 0.5em 0.5em 0.5em 0.2em white';
        document.querySelector("nav").style.top = "0";
    });
    listSectors[i].addEventListener('mouseout', () => {
        listSectors[i].style = 'none';
    });
} */




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