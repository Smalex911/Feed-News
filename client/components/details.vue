<template>
    <div class="news-list">
        <div class="news-info">
            <div class="news-info__content">
                <div class="news-info__content__title">{{ getNews.title }}</div>
                <div class="news-info__content__description">{{ getNews.descr }}</div>
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
            removeFromFav: function (item) {
                this.$store.commit('removeNews', item)
            },

            addToFav: function (item) {
                this.$store.commit('addNews', item)
            }
        },
        mounted() {
            this.$store.commit('setCity', this.$route.params.newsId);
        }
    }
</script>