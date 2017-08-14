<template>
    <div class="news-list">
        <div class="news-card" v-for="item in getFeedNews" :href="'/news/' + item.ts">
            <router-link v-bind:to="'/news/' + item.ts" class="news-card__content">
                <div class="news-card__content__title-outer">
                    <div class="news-card__content__title-inner">{{ item.title }}</div>
                </div>
            </router-link>
            <div class="news-card__content__footer">
                <button
                        class="news-card__remove"
                        @click="addToFav(item)"
                        v-if="!getFavouriteNews.includes(item)"
                >Добавить</button>
                <button
                        class="news-card__remove"
                        @click="removeFromFav(item)"
                        v-else
                >Убрать</button>
                <div class="news-card__content__time">{{ item.date }} {{ item.time }}</div>
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
        },
        methods: {
            removeFromFav: function (item) {
                this.$store.commit('removeNews', item)
            },

            addToFav: function (item) {
                this.$store.commit('addNews', item)
            }
        }
    }
</script>