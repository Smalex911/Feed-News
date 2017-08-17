import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

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

const getters = {
    favouriteNews(state) {
        return state.favouriteNews;
    }
};


const mutations = {
    removeNews(state, city) {
        state.favouriteNews.splice(state.favouriteNews.indexOf(city), 1)
    },

    addNews(state, city) {
        state.favouriteNews.push(city);
        console.log(state.favouriteNews)
    },

    setCity (state, ts) {
        state.currentNews.ts = ts;
    },

    newsLoaded (state, ts) {
        let news = state.feedNews.find(n => ts === n.ts);
        if (news === undefined) {
            news = state.favouriteNews.find(n => ts === n.ts);
        }
        state.currentNews = news;
    },

    setFeedNews(state, list) {
        state.feedNews = list;
        console.log(state.feedNews);
    },

    setFavouritesFeed(state, list) {
        state.favouriteNews = list;
        console.log('setFavouritesFeed');
        console.log(state.favouriteNews);
    },

    addToFavourite (state, newsToAdd) {
        state.favouriteNews.push(newsToAdd);

        axios.post('http://localhost:3000/news', newsToAdd);
    },

    removeFromFavourite (state, newsToRemove) {
        const news = state.favouriteNews.find(n => newsToRemove.ts === n.ts)
        state.favouriteNews.splice(state.favouriteNews.indexOf(news), 1);

        axios.get('http://localhost:3000/news?ts=' + newsToRemove.ts)
            .then((response) => {
                axios.delete('http://localhost:3000/news/' + response.data[0].id);
            })
    },

    setNotFound (state) {
        state.favouriteNews = [];
        console.log('setNotFound');
    },
};

const actions = {
    getFavouritesNews ({commit}) {
        axios.get(`http://localhost:3000/news`)
            .then((res) => {
                commit('setFavouritesFeed', res.data);
            })
            .catch(() => commit('setNotFound'));
    },

    loadSelectedNews ({commit}, ts) {
        axios.get(`http://localhost:3000/news`)
            .then(() => {
                commit('newsLoaded', ts);
            })
            .catch(() => commit('setNotFound'));
    }
};

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});

export default store