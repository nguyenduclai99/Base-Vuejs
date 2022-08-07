import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueMeta from 'vue-meta'
import './filter'
import './prototype'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/vi'

import 'element-ui/lib/theme-chalk/index.css';
import '@fortawesome/fontawesome-free/js/all.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/app.css'
import router from './router'
import VueAnalytics from 'vue-analytics';
//and then use it in main.js
Vue.use(VueAnalytics, {
    id: 'G-04D24J4TZZ',
    router
})

Vue.use(VueMeta)
Vue.use(ElementUI, { locale })

window._ = require('lodash');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
