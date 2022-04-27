var course = {
    name: 'Javascript',
    coin: 250
}

// if (course.coin > 0) {
//     console.log(`${course.coin} Coins`);
// } else {
//     console.log('Miễn phí');
// }


var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí';

console.log(result);
