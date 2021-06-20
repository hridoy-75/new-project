import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import 'animate.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'


const app = createApp(App)
app.use(router)

app.mount('#app')