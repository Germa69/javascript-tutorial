var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 0
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 200
    },
    {
        id: 4,
        name: 'Ruby',
        coin: 400
    },
    {
        id: 5,
        name: 'Ruby',
        coin: 500
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 700
    },
];

// Lọc xem tất cả khóa học nào thỏa mãn điều kiện?

var course = courses.filter((course, index) => {
    console.log(index);
    return course.name === 'Ruby2';
});

console.log(course);