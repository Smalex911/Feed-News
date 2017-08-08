import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    feedNews: window['m_auto'],

    favouriteNews: []
};

const mutations = {
    removeNews(state, city) {
        state.favouriteNews.splice(state.favouriteNews.indexOf(city), 1)
    },

    addNews(state, city) {
        state.favouriteNews.push(city);
        console.log(state.favouriteNews)
    }
};

console.log(state);
const store = new Vuex.Store({
    state,
    mutations
});

export default store