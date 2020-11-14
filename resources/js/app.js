require('./bootstrap');

window.Vue = require('vue');

import router from './router.js'
import store from './store'

Vue.component('main-component', () => import('./App.vue'));

Vue.component('pagination', require('laravel-vue-pagination'));

//VUE FILTER
import moment from 'moment'

Vue.filter('formatDate', function (value) {
    if (value) {
        return moment(String(value)).format('MMMM Do YYYY, h:mm a');
    }
})

// import 'vue-toast-notification/dist/theme-default.css';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
Vue.use(VueToast, {
    position: 'top-left'
});

import common from './common'
Vue.mixin(common)

const app = new Vue({
    el: '#app',
    store,
    router
});
