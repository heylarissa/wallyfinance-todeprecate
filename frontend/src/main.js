import './assets/main.css'

import { createApp, watch } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')

watch(
    pinia.state,
    (state) => {
      localStorage.setItem("counter", JSON.stringify(state.counter));
    },
    { deep: true }
    );