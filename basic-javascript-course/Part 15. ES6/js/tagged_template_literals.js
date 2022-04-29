function highlight ([first, ...strings], ...values) {
    return values.reduce (
        (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
        [first]
    )
    .join ('');
    // console.log(rest);
}

//TODO: Ý tưởng: Học lập trình <span>JavaScript</span> tại <span>F8</span>!

var brand = 'F8';
var course = 'JavaScript';

const html = highlight`Học lập trình ${course} tại ${brand}!`;
// console.log(html);
var pElement = document.querySelector('#text');

console.log(pElement);
pElement.innerHTML = html;