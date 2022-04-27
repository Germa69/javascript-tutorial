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
        coin: 400
    },
];

// Tìm kiếm xem có khóa học nào thỏa mãn điều kiện?

var course = courses.find((course, index) => {
    console.log(index);
    return course.name === 'Ruby1';
});

console.log(course);