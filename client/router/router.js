import Vue from 'vue';
import Router from 'vue-router';
import List from './../components/list';
import Favourites from './../components/favourites';
import Details from './../components/details';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: List
        },
        {
            path: '/favourites',
            component: Favourites
        },
        {
            path: '/news/:newsId',
            component: Details
        }
    ]
});
