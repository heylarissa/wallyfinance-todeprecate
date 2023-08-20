import './assets/main.css'

import { createApp, watch } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
