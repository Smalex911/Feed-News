<template>
    <div class="container">
        <div class="news-favourites" v-if="getFavouriteNews.length > 0">
            <div class="news-favourite-list">
                <div class="news-favourites-card" v-for="item in getFavouriteNews" :href="'/news/' + item.ts">
                    <router-link v-bind:to="'/news/' + item.ts" class="news-favourites-card__content">
                        <div class="news-favourites-card__content__title-outer">
                            <div class="news-favourites-card__content__title-inner">{{ item.title }}</div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="news-favourites" v-else>
            <div class="news-favourites__no-favourites">
                <div class="news-favourites__title">Нет избранного</div>
            </div>
        </div>

        <div class="news-list">
            <div class="news-card" v-for="item in getFeedNews" :href="'/news/' + item.ts">
                <router-link v-bind:to="'/news/' + item.ts" class="news-card__content">
                    <div class="news-card__content__title-outer">
                        <div class="news-card__content__title-inner">{{ item.title }}</div>
                    </div>
                </router-link>
                <div class="news-card__content__footer">
                    <button
                            class="news-card__content__remove"
                            @click="addToFav(item)"
                            v-if="favouritesNewsContains(item)"
                    >Добавить</button>
                    <button
                            class="news-card__content__remove"
                            @click="removeFromFav(item)"
                            v-else
                    >Убрать</button>
                    <div class="news-card__content__time">{{ item.date }} {{ item.time }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        computed: {
            getFeedNews: function() {
                return this.$store.state.feedNews
            },
            getFavouriteNews: function() {
                return this.$store.state.favouriteNews.reverse()
            }
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
            this.$store.dispatch('getFavouritesNews');
        }
    }
</script>