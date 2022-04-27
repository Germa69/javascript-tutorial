# Some

```
- Kiểm tra tất cả các phần tử trong mảng chỉ cần 1 phần tử trong mảng thỏa mãn điều kiện trả về true
- Kiểm tra điều kiện đúng thì dừng lại
- Trả về kiểu dữ liệu boolean
- Return rất quan trọng trong some() 
```

```
- Cú pháp:
    Syntax: [tên mảng].some(function(item, index, array) {
        console.log(item, index)
    })

- Nguyên tắc hoạt động: lặp mảng => mỗi lần lặp 1 phần tử => gọi ngược lại hàm => truyền cho hàm 1 tham số
```

# Tự tạo mới phương thức some()

```
Array.prototype.some2 = function (callback) {

    var output = false;

    for (var index in this) {
        if(this.hasOwnProperty(index)) {
            if(callback(this[index], index, this)) {
                output = true;
                break;
            };
        }
    }
    return output;
}
```