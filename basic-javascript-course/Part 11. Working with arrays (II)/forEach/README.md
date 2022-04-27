# forEach()

```
- Phương thức forEach() không trả về nên không cần return
- Hàm for..in không chỉ duyệt thành phần trong mảng mà còn duyệt cả element nằm trong __protot__
- Tại sao array có thể gọi được phương thức như .length, .push ?
-> Bới vì thằng Array Contructor đã định nghĩa trong prototype sẵn các phương thức này thế nên khi tạo 1 array mới thì nó 
được tạo ra từ contructor nên nó kế thừa lại phương thức đó.
- Hàm hasOwnProperty kiểm tra xem index có nằm trong phương thức gần nhất nó không
- Cú pháp:
    [tên mảng].forEach(function(item, index, array) {
        console.log(item, index)
    })
- Nguyên tắc hoạt động:: Duyệt qua từng phần tử của mảng
```

# Tự tạo mới phương thức forEach()

```
Array.prototype.forEach2 = function (callback) {
    for (const index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }

    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}
```