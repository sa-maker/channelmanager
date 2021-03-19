import Vue from 'vue'
import App from './App.vue'

import VueTailwind from 'vue-tailwind'

import { TModal } from 'vue-tailwind/dist/components'
const settings = {
  't-modal': {
    component: TModal
  }
}
Vue.use(VueTailwind, settings)

import store from './store'

import '@/assets/styles/index.css'


import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
//TODO: find a better way to import these font icons
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
library.add(faWhatsapp)
import { faAirbnb } from '@fortawesome/free-brands-svg-icons'
library.add(faAirbnb)
import { faAmazon } from '@fortawesome/free-brands-svg-icons'
library.add(faAmazon)
import { faAppStore } from '@fortawesome/free-brands-svg-icons'
library.add(faAppStore)
import { faGit } from '@fortawesome/free-brands-svg-icons'
library.add(faGit)
import { faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faGithub)
import { faTrello } from '@fortawesome/free-brands-svg-icons'
library.add(faTrello)

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

