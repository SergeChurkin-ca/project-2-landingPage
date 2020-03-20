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
const myTextInput = document.getElementById('myTextInput');
const nameInput = document.getElementById('nameInput');
const myButton = document.getElementById('myButton');

const section = document.querySelectorAll('section');
const listSectors = document.querySelectorAll('.landing__container'); // just for testing styles design


// Navbar folds and unfolds on scroll
// * https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
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

// dynamic navbar, with hover style effects in scrollIntoView,
// last changes the text content to 'comments'
const navbarMenu = () => {
    for (let i = 0; i <= 3; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.classList.add('menu__link');
        a.setAttribute('href', `#section${i + 1}`);
        a.scrollIntoView({ behavior: "smooth" });
        li.textContent = `Section ${i + 1}`;
        const navigation = document.getElementById('navbar__list');
        navigation.appendChild(li);
        if (i === 3) {
            li.textContent = `Comments`;
        };
        li.appendChild(a);
        li.addEventListener('mouseover', () => {
            li.style = "background-color: coral; border-radius: 0.5em; border: solid 0.1em";
        });
        li.addEventListener('mouseout', () => {
            li.style = "none";
        });
    }
};
navbarMenu();

// Posting comment, text and name appears in seciton4 - Comments
let inputFields = document.getElementsByClassName('posting__container')[0];
inputFields.addEventListener('click', (e) => {
    if (e.target.tagName = "INPUT") {
        e.target.style = "background-color: rgb(181, 252, 185); border: solid: 0.5em #333";
    }
});

// Posting button ackonwledges values or asks to fill in all fields
myButton.addEventListener("click", () => {
    if (myTextInput.value && nameInput.value) {
        section4.insertAdjacentHTML('beforeend', '<br><br>' + myTextInput.value + '\n\n' + `<i>${nameInput.value}</i>` + '<br><br>');
        window.alert(`Much appreceated, ${nameInput.value}! We like reading your writings! ;-)`);
        myTextInput.value = "";
        nameInput.value = "";
    } else {
        window.alert("Please fill in all sections");
    }
});


// Posting button style
myButton.addEventListener('mouseover', () => {
    myButton.style = "box-shadow: 0.3em 0.3em 0.3em grey; color: white";
});
myButton.addEventListener('mouseout', () => {
    myButton.style = "none";
});


// Add class 'active' to section when near top of viewport
// Define the style of active view and indicate in navbar
window.addEventListener('scroll', () => {
    const isInViewPort = function(elem) {
        var bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight - 150 || document.documentElement.clientHeight - 150) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    for (let i = 0; i < section.length; i++) {
        const addСlassActive = document.querySelectorAll('div')[i + 1];
        const addNavActive = document.querySelectorAll('li')[i];
        var h2 = document.querySelectorAll('h2')[i];
        if (isInViewPort(h2)) {
            addСlassActive.classList.add('active');
            addNavActive.classList.add('active-nav')
            addСlassActive.style = 'padding: 0 1em 0; border-radius: 0.5em; border-style: outset; box-shadow: 0.1em 0.1em 0.9em 0.2em white; transition: ease 0.7s; opacity: 2';
            addNavActive.style = "background-color: coral; border-radius: 0.5em; border: solid 0.1em";
        } else if (!isInViewPort(h2)) {
            addСlassActive.classList.remove('active')
            addNavActive.classList.remove('active')
            addСlassActive.style = "none";
            addNavActive.style = "none";
        }
    }
});