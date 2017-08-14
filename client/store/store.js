import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    feedNews : window['m_auto'],
    currentNews : {
        ts : '',
        title : '',
        descr : '',
        time : '',
        date : '',
        url : ''
    },
    favouriteNews: []
};

const mutations = {
    removeNews(state, city) {
        state.favouriteNews.splice(state.favouriteNews.indexOf(city), 1)
    },

    addNews(state, city) {
        state.favouriteNews.push(city);
        console.log(state.favouriteNews)
    },

    setCity (state, id) {
        state.feedNews.forEach(function(item, i, arr) {
            if (item.ts === id) {
                state.currentNews = item;
            }
        })
    }
};

console.log(state);
const store = new Vuex.Store({
    state,
    mutations
});

export default store