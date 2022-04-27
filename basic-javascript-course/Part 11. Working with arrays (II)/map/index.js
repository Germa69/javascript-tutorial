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


function courseHandler(course, index) {
    return {
        pos:index, 
        id: course.id,
        name: `Khóa học: ${course.name}`,
        coin: course.coin,
        coinText: `Giá: ${course.coin}`,
    };
}

var newCourse = courses.map(courseHandler);

console.log(newCourse);