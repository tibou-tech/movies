import { createPinia } from 'pinia'

import MainApp from './App.vue'
import router from './router'

// Css
import './index.css'
import './assets/main.css'

// Services
import './services/string.ts'

// Shared sections
import section from './shared'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faHome)
library.add(faSun)
library.add(faMoon)
library.add(faHeart)

// Create App
const app = createApp(MainApp)

app.component('font-awesome-icon', FontAwesomeIcon)

// Register api_url globally (Change the apikey with your own apikey)
app.provide('api_url', 'http://www.omdbapi.com/?apikey=8a3c1872')

app.use(createPinia())
app.use(router)
app.use(section)

app.mount('#app')
