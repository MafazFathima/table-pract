import { createApp } from 'vue'
import './style.css'
import router from './router' 
import PrimeVue from 'primevue/config';
import App from './App.vue'

const app = createApp(App);

app.use(router)
app.use(PrimeVue);
app.mount('#app')





