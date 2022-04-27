var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 10
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 10
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 400
    },
];

// Kiểm tra xem có khóa học miễn phí hay không?

var isFree = courses.some((course, index) => {
    console.log(index);
    return course.coin === 0;
});

console.log(isFree);