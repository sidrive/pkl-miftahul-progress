import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './components/Task.M3-W4/T2-W4/router'

const app = createApp(App)

app.use(router)

app.mount('#app')