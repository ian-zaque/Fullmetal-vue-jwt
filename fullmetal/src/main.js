import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router,axios).mount('#app')
