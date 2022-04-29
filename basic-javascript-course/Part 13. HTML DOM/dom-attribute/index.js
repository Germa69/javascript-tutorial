// TODO: DOM Attribute

var headingElement = document.querySelector('h1');
console.log(headingElement);
// //? C1: Đứng từ element . tới thuộc tính hợp lệ của elements | Chỉ có khi đoạn code JS thực thi
headingElement.id = 'heading';
// //? C2:
headingElement.setAttribute('data', 'heading');
console.log(headingElement.getAttribute('data'));