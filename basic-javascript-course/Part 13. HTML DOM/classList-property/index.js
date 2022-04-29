var boxElement = document.querySelector('.box');

boxElement.classList.add('red');
console.log(boxElement.classList.contains('red'));

setInterval(() => {
    boxElement.classList.remove('red');
    boxElement.classList.toggle('red'); 
}, 3000);