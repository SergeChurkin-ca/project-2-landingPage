/*
document.addEventListener('click', function() {
    const mainHeading = document.querySelector('h1');
    mainHeading.style.backgroundColor = 'orange';
});

*/
/*
document.body.addEventListener('keypress', function() {
    console.log('removing first childs');
    document.querySelector('#contain-all').firstElementChild.remove();
})
*/

/*---------------------------------------------------------------

/* code to refactor 

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    document.body.appendChild(newElement);
}
*/

// const t0 = performance.now(); //initiate time starting point to measure performance

//REFACTORED AND IMPROVED
/* const myCustomDiv = document.createElement('div');

for (let i = 0; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.innerText = "This is paragraph number" + i;

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);

/*-------------- this part check performance speed

const t1 = performance.now();
console.log("THis code took " + (t1 - t0) + " milliseconds."); */

/*------------------------------------------------------------------- */
/* rewriting with .createDocumentFragment ---------------------------- */

const t0 = performance.now();

const myDocFragm = document.createDocumentFragment();

for (let i = 0; i < 200; i++) {
    const newElem = document.createElement('p');
    newElem.innerText = 'This is paragraph number ' + i;

    myDocFragm.appendChild(newElem);
}

document.body.appendChild(myDocFragm);
const t1 = performance.now();
console.log(`The code runs ${t1 - t0} milliseconds`);

// The DocumentFragment interface represents a minimal document object that 
// has no parent.