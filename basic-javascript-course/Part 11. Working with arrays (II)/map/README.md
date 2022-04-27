# Map

```
- Trả về cái gì thì nó lấy cái đó làm element
```

```
- Cú pháp:
    Syntax: [tên mảng].map(function(item, index, array) {
        console.log(item, index)
    })

- Nguyên tắc hoạt động: lặp mảng => mỗi lần lặp 1 phần tử => gọi ngược lại hàm => truyền cho hàm 1 tham số
```

# Tự tạo mới phương thức map()

```
Array.prototype.map2 = function (callback) {
    <!-- this ~ jobs -->
    let output = [], arrayLength = this.length;

    for (let i = 0; i < arrayLength; i++) {
        result = callback(this[i], i, this);
        output.push(result);
    }

    return output;
}
```