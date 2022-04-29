# DOM events

```
- Là những sự kiện diễn ra ở trong DOM
- Là quá trình người dùng tương tác với website

- 1. Attribute events
- 2. Assign event using the element node: Chỉ thực thi khi lắng nghe sự kiện nào đó
    + target: Trả lại chính element mà chúng ta đang lắng nghe DOM events này

- Một số DOM Event sử dụng
    + onchange: Xảy ra khi người dùng nhập rồi focus ra ngoài | => Mục đích lấy value | Event, InputEvent
    + oninput: Xảy ra khi người dùng nhập vào                 | 
    + onkeydown: Sự kiện xảy ra khi người dùng đang nhấn một phím | => Mục đích thực hiện thao tác trên bàn phím | KeyboardEvent

- PreventDefault & stopPropagation
    + PreventDefault: Loại bỏ 1 hành vi mặc định của trình duyệt trên 1 thẻ HTML
    + stopPropagation: Loại bỏ sự kiện nổi bọt

    + startWith: Bắt đầu với 1 chuỗi
```