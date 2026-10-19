import { createApp } from 'vue'
import './style.css'
import './components/Task.M4-W2/tokens.css' // minggu 2 bulan 4 - Tokens design
import App from './App.vue'
import router from './components/Task.M3-W4/T2-W4/router'
import { createPinia } from 'pinia'

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)

app.use(router)

app.mount('#app')