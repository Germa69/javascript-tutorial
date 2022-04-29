// TODO: DOM events 1

// var h1Elements = document.querySelectorAll('h1');

// h1Elements.forEach(function(h1Element) {
//     h1Element.onclick = (e) => {
//         console.log(e.target);
//     }
// });

// TODO: DOM events 2

//? Lấy ra value của các elements

// var inputValue;

// var inputElement1 = document.querySelector('input[type="text"]');
// var inputElement2 = document.querySelector('input[type="checkbox"]');
// var inputElement3 = document.querySelector('select');

// inputElement1.onchange = function (e) {
//     console.log(e.target.value);
// }

// inputElement1.oninput = function (e) {
//     console.log(e.target.value);
// }

// inputElement1.onkeyup = function (e) {
//     console.log(e.which);

//     switch(e.which) {
//         case 27:
//             console.log('Exit');
//             break;
//     }
// }

// inputElement2.onchange = function (e) {
//     console.log(e.target.checked);
// }

// inputElement3.onchange = function (e) {
//     console.log(e.target.value);
// }

// TODO: DOM events 3
//! VD1: 
// var aElements = document.querySelectorAll('a');
// aElements.forEach(function(aElement) {
//     aElement.onclick = (e) => {
//         console.log(e.target.href);
//     }
// });

// var aElements = document.links;
// for (var i = 0; i < aElements.length; ++i) {
//     aElements[i].onclick = function (e) {
//         if(!e.target.href.startsWith('http://f8.edu.vn')) {
//             e.preventDefault();
//         }
//     }
// }

//!VD2:

// var ulElement = document.querySelector('ul');

// ulElement.onmousedown = function(e) {
//     e.preventDefault();
// }

// ulElement.onclick = function (e) {
//     console.log(e.target);
// }

//!VD3

// document.querySelector('div').onclick = function (e) {
//     console.log('DIV');
// }

// document.querySelector('button').onclick = function (e) {
//     e.stopPropagation();
//     console.log('Click me!');
// }