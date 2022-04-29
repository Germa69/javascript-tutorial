# InnerText vs TextContent Property

```
- Hai thuộc tính đều tồn tại trong element node
- Cách lấy ra 1 text node từ element node:
    ElementNode.innerText || ElementNode.textContent

- Cách sửa đổi 1 text node
    ElementNode.innerText || ElementNode.textContent = "ND mới";

- Sự khác nhau giữa InnerText vs textContent
    + InnerText: Trả lại giống như bạn nhìn thấy
    + textContent: Trả lại thực sự textNode nằm bên trong 

- Khi sử dụng thuộc tính trên thì không thể biến textNode thành element node

!Lưu ý: 
- Sự thay đổi này nó được tạo ra khi mã JS được thực thi 
- Các thẻ style, script khi nằm trong DOM thì vẫn chỉ là các element node, nội dung bên trong vẫn chỉ là textNode
```