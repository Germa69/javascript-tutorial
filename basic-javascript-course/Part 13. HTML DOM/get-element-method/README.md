# Get element method

```
Element: 
+ Element
    ` ID 
    ` CLASS
    ` TAG
    ` CSS SELECTOR
    ` HTML COLECTION (img, anchors, links forms)
        . anchors: Bắt buộc phải có trường name  | -> Trả về HTML Collection
        . links:                                 |
+ Attribute
+ Text
```

```
getElementById: Trả về một element

getElementsByClassName: Trả về giống như 1 mảng (# là không có phương thức map, filter, reduce,...)  |  => Trả về HTML Collection
getElementsByTagName: Trả về giống như 1 mảng (# là không có phương thức map, filter, reduce,...)    |  

document.querySelector: Select ra thẳng phần tử mà có selector tương ứng - trả về 1 element 

document.querySelectorAll: Select tất cả phần tử mà có selector tới | => Trả về NodeList

HTML Collection: Ít sử dụng
document.forms

! Lưu ý: 
- HTML Collection không dùng được phương thức forEach array, nên dùng for thường lấy ra element
- CSS SELECTOR sử dụng được cả hai 
- Có thể select của phần tử con đã có không nhất thiết là phải document
```