'use strict'

const start = document.querySelector('.start');
const week1 = document.querySelector('.week1');


// Shows strt button at end of video
function videoEnded() {
    document.querySelector('.intro').classList.add('hidden');
    start.classList.remove('hidden');
}

// Show week 1 content
start.addEventListener('click', function () {
    start.classList.add('hidden');
    week1.classList.remove('hidden');
});