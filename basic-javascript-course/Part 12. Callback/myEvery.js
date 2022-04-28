/**
 *  - every: true / false
 *  - Nếu 1 phần tử không thỏa mãn thì trả về false
 *  - Không duyệt qua mảng rỗng
 */

 var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 10,
        isFinished: true
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 10,
        isFinished: true
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 400,
        isFinished: true
    },
];

Array.prototype.every2 = function (callback) {
    var output = true;

    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            var result = callback(this[i], i, this)
            if (!result) {
                output = false;
                break;
            }
        }
    }

    return output;
}

var courses = new Array(1000);

var result = courses.every2(function (course, index, array) {
    console.log(course); //! Kiểm tra nó có lặp qua phần tử trống hay không
    return course.isFinished;
});

console.log(result);