// Tính tổng số coin của tất cả khóa học

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 400
    },
]

// #C1

// var totalCoin = 0;

// for (const course of courses) {
//     totalCoin+=course.coin;
// }

// console.log(totalCoin);

// #C2
var i = 0;

function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    i++;

    var total = accumulator + currentValue.coin;

    console.table({
        'Lượt chạy': i,
        'Biến lưu trữ': accumulator,
        'Giá khóa học': currentValue.coin,
        'Tích trữ được': total,
    });


    return total;
}

var totalCoin = courses.reduce(coinHandler, 0);

console.log(totalCoin);


