import './assets/css/main.css'

import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import './style.css'
import ui from '@nuxt/ui/vue-plugin'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(ui)
app.mount('#app')
