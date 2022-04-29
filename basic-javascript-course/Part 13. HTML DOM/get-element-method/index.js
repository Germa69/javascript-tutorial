// TODO: GET ELEMENT METHODS (L1)
var headingNode = document.getElementById('heading');

var checkboxNodes = document.querySelectorAll("input");
var checkbox1Element = document.querySelector("input[type='checkbox'][value='1']");
var checkboxCheckedAndNotDisabled = document.querySelector("[type='checkbox'][checked]:not([disabled])");
var checkboxDisabledAndNotChecked = document.querySelector("[type='checkbox'][disabled]:not([checked])");
var checkboxCheckedAndDisabled = document.querySelector("[type='checkbox']:last-child");

var node = document.createElement('li');
var textNode = document.createTextNode('PHP');
node.appendChild(textNode);
var ulElement = document.querySelector('ul').appendChild(node);

console.log(ulElement);


// TODO: GET ELEMENT METHODS (L2) 

var listItemNodes = document.querySelectorAll('.box-1 li');

console.log(listItemNodes);

//! Công việc 1: Sử dụng tới `boxNode`
var boxNode = document.querySelector('.box-1');
console.log(boxNode);

//! Công việc 2: Sử dụng tới các li elements là con của `box-1`
console.log(boxNode.getElementsByTagName('li'));
console.log(boxNode.getElementsByTagName('p'));