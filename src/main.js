import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import '../src/assets/css/custom.css'

import router from './router'
import {store} from './store'

Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App),
    created() {
        this.$store.dispatch('getWebsites')
    }
}).$mount('#app')
