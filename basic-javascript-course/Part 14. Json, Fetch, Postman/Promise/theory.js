// TODO: Bài toán 1 - Sync / Async
// sleep 
// setTimeout(() => {
//     console.log(1);
// }, 1000);

// console.log(2);

/**
 *  - CH1: Số nào in ra trước, số nào in ra sau
    - CH2: Theo tư duy đồng bộ thì như thế nào mới đúng

    - Theo tư duy đồng bộ thì thằng số 1 in ra trước, thằng số 2 in ra sau cho dù nằm trong setTimeout
    - JS là ngôn ngữ đồng bộ nhưng nó có thao tác bất đồng bộ
 */

// TODO: Bài toán 2 - Pain

// setTimeout(() => {
//     console.log('Công việc 1'); 
//     setTimeout(() => {
//         console.log('Công việc 2'); 
//         setTimeout(() => {
//             console.log('Công việc 3'); 
//             setTimeout(() => {
//                 console.log('Công việc 4'); 
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// TODO: Bài toán 3 - Concept

/**
 * B1: Khởi tạo Promise
 * B2: Executor
 * B3: Trả lại phương thức
 *  - then(callback) - nhận kết quả trả về từ (resolve)
 *  - catch(callback) - nhận kết quả trả về từ (reject)
 *  - finally(callback) - xử lý logic trong mọi trường hợp sau khi này hoàn thành (luôn chạy)
 */

// var promise = new Promise(
//     //! Executor 
//     function (resolve, reject) {
//         resolve([
//             {
//                 id: 1,
//                 name: 'JavaScript'
//             }
//         ]);

//         // reject('Có lỗi');
//     }
// );

// promise
//     .then (function (course) {
//         console.log(course);
//     })
//     .catch (function(error) {
//         console.log(error);
//     })
//     .finally (function() {
//         console.log('Done!');
//     })

// TODO: Bài toán 3 - Chain
//? VD1
// var promise = new Promise(
//     //! Executor 
//     function (resolve, reject) {
//         resolve();
//     }
// );

// promise
//     .then (function () {
//         return new Promise(function (resolve){
//             setTimeout(() => {
//                 resolve(1);
//             }, 3000);
//         });
//     })
//     .then (function (val) {
//         console.log(val);
//         return 2;
//     })
//     .then (function (val) {
//         console.log(val);
//     })
//     .catch (function(error) {
//         console.log(error);
//     })
//     .finally (function() {
//         console.log('Done!');
//     })

//? VD2:

// function sleep (ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms)
//     });
// }

// sleep(1000)
//     .then (() => {
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(() => {
//         console.log(2);
//         return sleep(1000);
//     })
//     .then(() => {
//         console.log(3);
//     })

//? VD3:

// function fetchData(url){
//     return new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             const data = url;

//             if(data > 0.5){
//                 resolve(data);
//             }else{
//                 reject("Thất bại");
//             }
//         }, 3000)
//     })
// }

// fetchData('https://dynonguyen.com')
// .then(function(data){ console.log(data) })
// .catch(function(error){ console.log(error) })
// .finally(function(){ console.log('Done') })

// TODO: Bài toán 4 - Promise methods
//? VD1

// var promise = Promise.resolve('Success');

// promise
//     .then((result) => {
//         console.log('result:', result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

//? VD2 - TH1: Không có reject

// var promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve([1]);
//     }, 1000)
// }); 

// var promise2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve([2, 3]);
//     }, 2000)
// })

// Promise.all([promise1, promise2])
//     .then (([result1, result2]) => {
//         console.log(result1.concat(result2));
//     });


//? VD2 - TH2: Có reject

// var promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve([1]);
//     }, 1000)
// }); 

// var promise2 = Promise.reject('Có lỗi');

// Promise.all([promise1, promise2])
//     .then (([result1, result2]) => {
//         console.log(result1.concat(result2));
//     })
//     .catch ((err) => {
//         console.log(err);
//     })

// TODO: Bài toán 4 - Promise example

/**
 *  - Có 2 API: 
 *      - Lấy comment   
 *      - Lấy user
 *  - Cách lấy ra dữ liệu:
 *      + B1: Lấy comments 
 *      + B2: Từ comments lấy ra user_id
 *      + B3: Từ user_id lấy ra user tương ứng
 *  - Viết Fake API: Mô phỏng ra 1 hàm thực hiện gọi qua URL mà backend trả về để có thể lấy dữ liệu
 * 
 *  (Hành động lấy ra được dữ liệu qua API thì nó là hành động xử lý bất đồng bộ trong JS)
 */

// Nơi lưu trữ
var users = [
    {
        id: 1,
        name: 'Nguyễn Đức Anh'
    },
    {
        id: 2,
        name: 'Nguyễn Đức Phúc Lộc'
    },
    {
        id: 3,
        name: 'Nguyễn Đức Lương'
    }
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Mây giờ ăn trưa anh ơi'
    },
    {
        id: 2,
        user_id: 2,
        content: '12h em ơi'
    }
]   

function getComments () {
    return new Promise((resolve) => {
        // Lấy dữ liệu qua mạng
        setTimeout(() => {
            resolve(comments);
        }, 1000);
    });
}

function getUsersByIds (userIds) {
   return new Promise((resolve) => {
       setTimeout(() => {
            var result = users.filter((user) => {
                return userIds.includes(user.id);
            });
            resolve(result);
       }, 1000)
   })
}

getComments()
    .then((comments) => {
        var userIds = comments.map((comment) => {
            return comment.user_id
        });

        return getUsersByIds(userIds)
            .then((users) => {
                return { 
                    users: users, 
                    comments: comments
                };
            });
    })
    .then ((data) => {
        var commentBlock = document.getElementById('comment-block');

        console.log(commentBlock);

        var html = '';

        data.comments.forEach((comment) => {
            // Từ comment get ra user tương ứng
            var user = data.users.find((user) => {
                return user.id === comment.user_id;
            });

            html += `<li>${user.name}: ${comment.content}</li>`

            commentBlock.innerHTML = html;
        });
    })



