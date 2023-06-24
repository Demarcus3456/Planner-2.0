'use strict'

const start = document.querySelector('.start');
const week1 = document.querySelector('.week1');
const week2 = document.querySelector('.week2');
const week3 = document.querySelector('.week3');
const week4 = document.querySelector('.week4');
const week5 = document.querySelector('.week5');
const week6 = document.querySelector('.week6');
const week7 = document.querySelector('.week7');
const week8 = document.querySelector('.week8');
const week1btn = document.querySelector('.week1-btn');
const week2btn = document.querySelector('.week2-btn');
const week3btn = document.querySelector('.week3-btn');
const week4btn = document.querySelector('.week4-btn');
const week5btn = document.querySelector('.week5-btn');
const week6btn = document.querySelector('.week6-btn');
const week7btn = document.querySelector('.week7-btn');
const week8btn = document.querySelector('.week8-btn');

// Shows strt button at end of video
function videoEnded() {
    document.querySelector('.intro').classList.add('hidden');
    start.classList.remove('hidden');
}

// Show weeks content
start.addEventListener('click', function () {
    start.classList.add('hidden');
    week1.classList.remove('hidden');
});

// Shows week 1 content
week1btn.addEventListener('click', function () {
    week1.classList.remove('hidden');
    week2.classList.add('hidden');
});

// Shows week 2 content
week2btn.addEventListener('click', function () {
    week1.classList.add('hidden');
    week2.classList.remove('hidden');
});

// Shows week 3 content
week3btn.addEventListener('click', function () {
    week1.classList.remove('hidden');
    week2.classList.add('hidden');
});

// Shows week 4 content
week4btn.addEventListener('click', function () {
    week1.classList.add('hidden');
    week2.classList.remove('hidden');
});

// Shows week 5 content
week5btn.addEventListener('click', function () {
    week1.classList.remove('hidden');
    week2.classList.add('hidden');
});

// Shows week 6 content
week6btn.addEventListener('click', function () {
    week1.classList.add('hidden');
    week2.classList.remove('hidden');
});

// Shows week 7 content
week7btn.addEventListener('click', function () {
    week1.classList.remove('hidden');
    week2.classList.add('hidden');
});

// Shows week 8 content
week8btn.addEventListener('click', function () {
    week1.classList.add('hidden');
    week2.classList.remove('hidden');
});