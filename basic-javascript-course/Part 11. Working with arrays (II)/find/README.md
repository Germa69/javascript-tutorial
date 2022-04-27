# Find

```
- Luôn trả về 1 phần tử
- Kiểm tra điều kiện đúng thì dừng lại 
- Nếu kiểm tra không có phần tử thỏa mãn thì nó trả về undefined
```

```
- Cú pháp:
    Syntax: [tên mảng].find(function(item, index, array) {
        console.log(item, index)
    })

- Nguyên tắc hoạt động: lặp mảng => mỗi lần lặp 1 phần tử => gọi ngược lại hàm => truyền cho hàm 1 tham số
```

# Tự tạo mới phương thức find()

```
Array.prototype.find2 = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var result = callback(this[i], i, this);
        if(result) {
            return this[i];
        }
    }
}
```