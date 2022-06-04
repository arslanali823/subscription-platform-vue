import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import '../src/assets/css/custom.css'

import AlertComponent from './components/Shared/Alert'

import router from './router'
import {store} from './store'

import DateFilter from './filters/date'

Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertComponent)

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App),
    created() {
        this.$store.dispatch('getWebsites')
    }
}).$mount('#app')
