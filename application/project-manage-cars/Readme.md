      Dispatch
- View -----> Actions -----> Reducers -----> Store
    |                                          |
    |                                          |
    -------------------------------------------|
                      subcribe


## Map 

# for..of

const iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (const entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (const [key, value] of iterable) {
  console.log(value);
}

// 1
// 2
// 3

https://viblo.asia/p/tim-hieu-ve-map-va-set-trong-javascript-aWj53LaQK6m

# Object.assign

https://viblo.asia/p/chi-tiet-ve-objectassign-OeVKBdEylkW

## Tư tưởng học lập trình 
- Nâng cao là cách nghĩ khác đi của cơ bản


## Giải thích

- Đầu tiên nó chạy file script.js
  + Import thằng attach và nó truyền đối số component và root
  + Thằng attach thì nó Import từ thằng createStore

- Logic attach
  + Nó set cái root
  + Khi gọi file script.js truyền cái component và root thì khi được thực thi nó set root: key, component: value
  + Sau đó nó gọi hàm render và hàm sẽ được gọi -> nó sẽ map qua thằng roots và nhận lại root, component vừa set,
  bởi vì component là file App mà App là 1 hàm thế nên khi thằng call nó chạy nhận lại html của thằng App và html nó lại đẩy sang
  hàm html nên nó được xử lý 1 số vấn đề => nhận được html và lưu vào output => render ra view 

- Logic tại sao connect được ?
  + Nó gồm Actions, Reducers, Store
  + Đầu tiên createStore là hàm trung tâm nó nhận 1 đối số reducer và nó mong muốn reducer trong trường hợp mặc định phải return lại 
  một giá trị khởi tạo luôn để nó làm state ban đầu
  + Thế nên ban đầu khởi tạo init mặc định sẵn của reducer và state ban đầu của reducer nó cũng là thằng init và trong lần đầu tiên những thằng action chưa được thực hiện nên lọt case default nên state nó nhận giá trị ban đầu là init

  + Hàm connect là hàm để nó đẩy dữ liệu từ store ngược vào, trong App gọi tới connect nó thực thi hàm connect và trả hàm mới 
    . connect() chạy nó return lại 1 arrow function và nhận 1 đối số là component thế nên return nó lưu biến connector, vì connector 
    nó lại là 1 hàm nhận cái đối sô component 
    . connector nó sẽ trả ra 1 hàm mới nữa, nó sẽ run function App và nó trả lại 1 Object được hợp nhất bởi thằng props, ...
    Và khi nó truyền nó map với thằng state => nó giúp bạn truyền dữ liệu từ store sang view
    component(Object.assign({}, props, selector(state), ...args))   ~ function App
  
  + Khi bắt sự kiện onclick thì gọi dispatch truyền vào action, value
    . Khi hàm dispatch được chạy thì nó lại gọi reducer nó lấy giá trị state từ lần trước đó, đẩy action và dữ liệu sang