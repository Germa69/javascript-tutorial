# DOM Attribute

```
Hai cách thêm thuộc tính vào node element:
- Truy xuất trực tiếp qua thuộc tính: 
Setter of attributes: Thêm thuộc tính phải hợp lệ với element
    Element.attr_name = 'ND';

    - Get ra value của element
    console.log(Element.attr_name)
    
- Truy xuất trực tiếp qua phương thức:
Dùng phương thức setAttribute: Thêm thuộc tính không phải hợp lệ với element và lấy ra các attr không cần hợp lệ
    Element.setAttribute('attr_name', 'ND')

    - Get ra value của element
    console.log(Element.getAttribute('attr_name'))
```