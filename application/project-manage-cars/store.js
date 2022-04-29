// Nơi chứa state

import { createStore } from "./core.js";
import reducer from './reducer.js'

const { attach, connect, dispatch } = createStore(reducer)

// dispatch cần đặt cho nó biến global để dễ sử dụng
// Trong view cũng dispatch action

window.dispatch = dispatch

export {    
    attach,
    connect
}