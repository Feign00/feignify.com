import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { vScramble } from './directives/vScramble'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.directive('scramble', vScramble)
app.mount('#app')
