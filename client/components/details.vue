<template>
    <div class="news-list">
        <div class="news-info__content__footer">
            <div class="news-info__content__back-link">
                <router-link class="news-info__content__back-link" to="/">Вернуться назад</router-link>
            </div>
            <div class="news-info__content__block-remove">
                <button
                        class="news-info__content__block-remove__link"
                        @click="addToFav(getNews)"
                        v-if="favouritesNewsContains(getNews)"
                >Добавить в избранное</button>
                <button
                        class="news-info__content__block-remove__link"
                        @click="removeFromFav(getNews)"
                        v-else
                >Убрать из избранного</button>
            </div>
        </div>
        <div class="news-info">
            <div class="news-info__content">
                <div class="news-info__content__title">{{ getNews.title }}</div>
                <div class="news-info__content__description">{{ getNews.descr }}</div>
                <div class="news-info__content__time">{{ getNews.date + " " + getNews.time }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            getFeedNews: function() {
                return this.$store.state.feedNews
            },
            getFavouriteNews: function() {
                return this.$store.state.favouriteNews
            },
            getNews: function() {
                return this.$store.state.currentNews
            },
        },
        methods: {
            favouritesNewsContains: function (item) {
                return this.$store.state.favouriteNews.find(n => n.ts === item.ts) === undefined;
            },

            removeFromFav: function (item) {
                this.$store.commit('removeFromFavourite', item)
            },

            addToFav: function (item) {
                this.$store.commit('addToFavourite', item)
            }
        },
        mounted() {
            this.$store.dispatch('loadSelectedNews', this.$route.params.newsId);
        }
    }
</script>