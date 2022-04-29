// Nơi chứa state

import { createStore } from "./core.js";
import reducer from './reducer.js'
import withLogger from './logger.js'

const { attach, connect, dispatch } = createStore(withLogger(reducer))

// withLogger bản thân nó phải return sang 1 hàm khác

// dispatch cần đặt cho nó biến global để dễ sử dụng
// Trong view cũng dispatch action

window.dispatch = dispatch

export {    
    attach,
    connect
}