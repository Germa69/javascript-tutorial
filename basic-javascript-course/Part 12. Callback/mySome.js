/**
 *  - some: true / false
 */

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 10,
        isFinished: false
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 10,
        isFinished: false
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 400,
        isFinished: false
    },
];

Array.prototype.some2 = function (callback) {
    var output = false;

    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            var result = callback(this[i], i, this);
            if (result) {
                output = true;
                break;
            };
        }
    }

    return output;
}

var isFinish = courses.some2(function (course, index, array) {
    return course.isFinished === true;
});

console.log(isFinish);