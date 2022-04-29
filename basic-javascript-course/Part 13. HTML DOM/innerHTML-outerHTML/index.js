var boxElement = document.querySelector('.box');

boxElement.innerHTML = '<h1>Heading</h1>';
console.log(boxElement.innerText);

var ulElement = document.querySelectorAll('div > ul');

ulElement[0].innerHTML = `
    <li>Hoc</li>
    <li>Lap</li>
    <li>Trinh</li>
`;

ulElement[1].outerHTML = '<h1>JavaScript</h1>'