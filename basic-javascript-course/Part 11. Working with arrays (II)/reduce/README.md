# Reduce

```
- Khi muốn trả về một giá trị duy nhât sau khi tính toán và xử lý trên phần tử trong 1 array
```

```
- Cú pháp:
    Syntax: [tên mảng].map(function(item, index, array) {
        console.log(item, index)
    }, accumulator)

- Nguyên tắc hoạt động: 
+> accumulator: Biến lưu trữ (Số 0 là giá trị khởi tạo gán cho accumulator) 
-> Biến khởi tạo truyền nó cái gì thì biến accumulator lần chạy đầu tiên có giá trị đó
-> Return cái gì thì nó lấy cái đó làm biến lưu trữ
-> Biến tích trữ luôn luôn bằng với biến tích trữ được lần trước đó
+> currentValue: Mỗi khi gọi lại function thì đang ở 1 vị trí nào đó (cầm cả object trả về)
+> currentIndex: Chỉ mục của thằng currentValue
+> originArray: Mảng gốc = courses
+> Return cái gì thì lưu trữ cái đó
+> Giá trị tích trữ lần sau luôn luôn bằng giá trị tích trữ lần trước đó

+> Khi không có biến initial value thì nó sẽ lấy phần tử đầu tiên làm giá trị khởi tạo
+> Khi không có biến initial value thì lần đầu tiên lặp current value là 2
+> Giá trị đầu ra là gì thì giá trị khởi tạo nào đó
```

# Tự tạo mới phương thức reduce()

```
Array.prototype.reduce2 = function(callback, result) {
    let i = 0;

    if(arguments.length < 2) {
        i = 1;
        result = this[0];
    }

    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}
```