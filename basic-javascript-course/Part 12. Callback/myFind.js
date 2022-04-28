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

Array.prototype.find2 = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var result = callback(this[i], i, this);
        if(result) {
            return this[i];
        }
    }
}

var findCourses = courses.find2(function (course, index, array) {
    return course.coin > 100;
});

console.log(findCourses);