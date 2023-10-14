import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */

import {
  faPlus,
  faMinus,
  faCaretRight,
  faCaretLeft,
  faDollarSign,
  faCreditCard,
  faCircleHalfStroke,
  faPalette
} from '@fortawesome/free-solid-svg-icons'

// import { faCreditCard } from '@fortawesome/free-regular-svg-icons'

library.add(faPlus, faMinus, faCaretRight, faCaretLeft, faDollarSign, faCreditCard, faCircleHalfStroke, faPalette)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)


app.mount('#root')
