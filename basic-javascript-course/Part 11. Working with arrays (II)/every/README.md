# Every

```
- Kiểm tra tất cả các phần tử trong mảng phải thỏa mãn 1 điều kiện gì đó thì mới trả về true
- Lặp hết mảng cho đến khi điều kiện sai dừng lại
- Chỉ cần 1 phần tử trong mảng không thỏa mãn điều kiện thì trả về false
- Trả về kiểu dữ liệu boolean
- Return rất quan trọng trong every() 
```

```
- Cú pháp:
    Syntax: [tên mảng].every(function(item, index, array) {
        console.log(item, index)
    })

- Nguyên tắc hoạt động: lặp mảng => mỗi lần lặp 1 phần tử => gọi ngược lại hàm => truyền cho hàm 1 tham số
```
# Tự tạo mới phương thức every()

```
Array.prototype.every2 = function (callback) {

    var output = true;

    for (var index in this) {
        if(this.hasOwnProperty(index)) {
          var result = callback(this[index], index, this);
          if(!result) {
              output = false;
              break;
          }
        }
    }

    return output;
}
```