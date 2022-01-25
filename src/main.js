import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import Vant from 'vant'
import 'vant/lib/index.css'

import router from './router'
import store from './store'
import './style/index.scss'

Vue.use(MintUI)
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
