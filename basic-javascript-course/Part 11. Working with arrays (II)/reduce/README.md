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

``` 
- Khi reduce hoạt động nó gọi lại callback và trả lại 4 đối số 
 + total: biến tích trữ
 + number: currentValue 
 + index: Chỉ mục của mảng 
 + array: Mảng gốc gọi từ chính phương thức reduce ~ arrNums
- Phương thức Reduce có thể gọi lại hàm callback nhiều lần
- Điểm khác nhau giữa việc có truyền initialValue hay không thì nó chỉ khác nhau lần gọi đầu tiên thôi

! TH1: Chỉ truyền callback không truyền initValue
- Khi callback được gọi thì:
 + Biến tích trữ chính là phần tử đầu tiên của mảng
 + CurrentValue là phần tử thứ hai của mảng
-  

! TH2: Truyền cả callback và initValue
- Khi callback được gọi thì: 
 + Biến tích trữ chính là giá trị khởi tạo
 + CurrentValue là phần tử đầu tiên của mảng

!Lưu ý: Biến khởi tạo ~ biến kết quả hiển thị ra màn hình
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