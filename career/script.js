"use strict";

const js = document.querySelector('.js-content');
const startjs = document.querySelector('.start-js');
const title = document.querySelector('.container');
const back = document.querySelector('.back');

// Opens javaScript content
startjs.addEventListener('click', function () {
    title.classList.add('hidden');
    js.classList.remove('hidden');
});

// Closes javaScript content and brings up list
back.addEventListener('click', function () {
    title.classList.remove('hidden');
    js.classList.add('hidden');
});







// Numbers 
// Define your code example here
var code = `
// With decimals:
let x1 = 34.00;

// Without decimals:
let x2 = 34;
`;

// Get the code example container element
var codeExample = document.getElementById('numbers');

// Set the code as the innerHTML of the container
codeExample.innerHTML = code;



// Strings
// Define your code example here
var code2 = `
// Using double quotes:
let carName1 = "Volvo XC60";

// Using single quotes:
let carName2 = 'Volvo XC60';
`;

// Get the code example container element
var codeExample2 = document.getElementById('strings');

// Set the code as the innerHTML of the container
codeExample2.innerHTML = code2;



// Booleans
// Define your code example here
var code3 = `
let x = 5;
let y = 5;
let z = 6;
(x == y)       // Returns true
(x == z)       // Returns false
`;

// Get the code example container element
var codeExample3 = document.getElementById('booleans');

// Set the code as the innerHTML of the container
codeExample3.innerHTML = code3;



// Undefined
// Define your code example here
var code4 = `
let car;    // Value is undefined, type is undefined
car = undefined;    // Value is undefined, type is undefined
`;

// Get the code example container element
var codeExample4 = document.getElementById('undefineds');

// Set the code as the innerHTML of the container
codeExample4.innerHTML = code4;



// Null
// Define your code example here
var code5 = `
let num = null;

console.log(num); // null
console.log(typeof num); // "object"
`;

// Get the code example container element
var codeExample5 = document.getElementById('nulls');

// Set the code as the innerHTML of the container
codeExample5.innerHTML = code5;