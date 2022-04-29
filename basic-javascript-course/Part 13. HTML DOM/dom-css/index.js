var boxElement = document.querySelector('.box');

Object.assign(boxElement.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'blue',
});

console.log(boxElement.style); //? Từ điển property DOM
console.log(boxElement.style.backgroundColor); 