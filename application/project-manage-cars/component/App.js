import html from '../core.js'
import { connect } from '../store.js';

// Nó sẽ return lại hàm bên trong và nó return lại đối số component
// connector là hàm mới nhận lại component 

// App chính là component
const connector = connect()

function App ({ cars }) {   // { cars } ~ props
    // console.log(cars);
    return html`
        <ul>
            ${cars.map(car => `<li>${car}</li>`)}
        </ul>

        <button onclick="dispatch('ADD', 'Porsche')">Thêm</button>
    `
}

export default connector(App)