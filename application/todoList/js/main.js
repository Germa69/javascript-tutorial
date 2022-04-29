import { attach } from "../store.js"
import App from "../component/App.js"

const root = document.querySelector('#root')

attach(App, root)