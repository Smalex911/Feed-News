import Vue from 'vue';
import List from './components/list/list';
import Favourites from './components/list/favourites';
import store from './store/store';

const app = new Vue({
    components: {
        List,
        Favourites
    },
    render(h) {
        return (
            <div class="container" >
            <h1 class="page__title">Новостная лента</h1>
            <favourites></favourites>
            <list></list>
            </div>
    );
    },
    store
});

export { app }