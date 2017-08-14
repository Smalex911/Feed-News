import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import App from './components/App';
import router from './router/router';
import store from './store/store';
import Favourites from './components/favourites';

sync(store, router);

const app = new Vue({
    components: {
        Favourites
    },
    router,
    store,
    ...App
});

export { app, router, store }