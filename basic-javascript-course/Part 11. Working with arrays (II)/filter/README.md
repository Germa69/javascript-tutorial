# Filter

```
- Trả về tất cả phần tử
- Kiểm tra điều kiện đúng thì dừng lại 
- Tìm kiếm qua 1 danh sách
- Nếu kiểm tra không có phần tử thỏa mãn thì nó trả về []
```

```
- Cú pháp:
    Syntax: [tên mảng].filter(function(item, index, array) {
        console.log(item, index)
    })

- Nguyên tắc hoạt động: lặp mảng => mỗi lần lặp 1 phần tử => gọi ngược lại hàm => truyền cho hàm 1 tham số
```

# Tự tạo mới phương thức filter()

```
Array.prototype.filter2 = function (callback) {

    var output = [];

    for (const index in this) {
        if(this.hasOwnProperty(index)){
            var result = callback(this[index], index, this);
            if(result) {
                output.push(this[index]);
            }
        }
    }

    return output;
}
```