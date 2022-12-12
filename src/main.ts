import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import { createPinia } from "pinia"
import { vuetify } from './plugins/vuetify'

import router from "@/routes/index"
import i18n  from '@/plugins/i18n'




const app = createApp(App)
const pinia = createPinia()

app.use(router).use(vuetify).use(pinia).use(i18n).mount("#app")
