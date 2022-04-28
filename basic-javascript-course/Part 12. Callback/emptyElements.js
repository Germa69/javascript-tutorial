/**
 *  - Không phải lúc nào độ dài nó cũng tượng trưng cho số lượng phần tử
 *  - Không phải hàm for thiết kế ra để duyệt mảng
 * 
 *  - Hàm for..in lặp qua phần tử thực
 */

var courses = ["JavaScript", "PHP", "Ruby"];

for (const index in courses) {
    console.log(courses[index]);
}