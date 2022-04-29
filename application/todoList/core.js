export default function html ([first, ...strings], ...values) {
    return values.reduce(
        (acc, cur) => acc.concat(cur, strings.shift()),
        [first]
    )
    .filter(x => x && x !== true || x === 0) 
    .join('');
}


export function createStore (reducer) {
    // Nhận 1 callback reducer
    // Dữ liệu trong store là 1 kho nhưng không gọi là kho mà gọi là state (trạng thái)

    // Đến khi gọi thằng createStore thì truyền 1 callback vào, nó sẽ return dữ liệu ban đầu của store và nó lưu vào state
    let state = reducer()

    // Chứa gốc element để chúng ta render ra view
    // Map() là 1 Object đặc biệt, nó có tính chất lặp qua và có thể đặt key nó là bất cứ kiểu dữ liệu nào trong JavaScript

    // TH khi sử dụng Object thì bị hạn chế là key nó chỉ là chuỗi nên sử dụng Map

    // Mong muốn lấy object làm key 
    const roots = new Map()

    function render() {
        for (const [root, component] of roots) {
            // component là 1 function và nó return ra các chuỗi html
            const output = component()
            root.innerHTML = output
        }
    }

    // Khởi tạo ra 1 số method để phục vụ createStore

    return {
        // Phương thức Attach giúp bạn nhận view đẩy sang root
        attach(component, root) {
            roots.set(root, component)
            render()
        },

        // Phương thức connect đẩy dữ liệu từ store sang view
        // Có rất nhiều màn hình 
        // selector giúp lựa chọn dữ liệu cụ thể trong store 

        // selector = state => state là gán mặc định store. Là đối số khi truyền nhận giá trị khác và khi không truyền nhận store
        // selector là 1 hàm
        connect(selector = state => state) {
            // props là dữ liệu muốn truyền vào component sau này 
            // Sử dụng toán tử rest để nhận lại tất cả arguments

            // state, props, args là 1 Object
            return component => (props, ...args) => 
                // Object.assign(): giúp merge và tạo ra 1 Object mới
                component(Object.assign({}, props, selector(state), ...args))
        },

        // Phương thức dispatch giúp view thực hiện được những actions
        dispatch(action, ...args) {
            // Tham số thứ nhất là giá trị lần trước nó return (ở hàm reduce)
            // Dựa vào action đi sửa state và return lại cái state mới => store update lại
            state = reducer(state, action, args) 
            render()
        }
    }
}