import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Quasar } from 'quasar'
import router from './router'
import '@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import 'quasar/src/css/index.sass'

const myApp = createApp(App)
myApp.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
})

myApp.use(router)  
myApp.mount('#app')
