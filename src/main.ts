import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import loadPlugins from '@/plugins'
const app = createApp(App)

loadPlugins(app)
app.use(store).use(router).mount('#app')
