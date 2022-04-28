/**
 *  - Nếu không có phần tử thỏa mãn thì trả về []
 */


var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 120
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 100
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 400
    },
];


Array.prototype.filter2 = function (callback) {

    var output = [];

    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            var result = callback(this[i], i, this);
            if (result) {
                output.push(this[i]);
            }
        }
    }

    return output;
}

var filterCourses = courses.filter2(function (course, index, array) {
    return course.coin > 100;
});

console.log(filterCourses);