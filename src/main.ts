import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* add fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faChildReaching,
  faFaceGrinSquint,
  faHandPointer,
  faHeart,
  faMugSaucer
} from '@fortawesome/free-solid-svg-icons'
import 'vuetify/styles'
import './assets/balloons.css'
import './assets/envelope.css'
import './assets/fonts.css'

library.add(faHeart, faFaceGrinSquint, faMugSaucer, faChildReaching, faHandPointer)

const vuetify = createVuetify({
  components,
  directives
})

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(vuetify).mount('#app')
