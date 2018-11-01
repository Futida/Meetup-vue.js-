import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'
import VueFire from 'vuefire'
import Vuetify  from 'vuetify'
import router from './router/index'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'


Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueFire);
Vue.use(Vuetify);
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDmlY00L3Y6ZqFYMxdDRE0FnmJWnYG6vIs'
    }
});

new Vue({
    store,
    router,
    el: '#app',
    render: h => h(App)
});



