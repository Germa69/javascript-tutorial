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

// Kiểm tra xem tất cả khóa học này có miễn phí hay không?

var isFree = courses.every((course, index) => {
    console.log(index);
    return course.coin === 0;
});

console.log(isFree);