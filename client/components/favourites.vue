<template>
    <div class="news-favourites" v-if="getFavouriteNews.length > 0">
        Избранное: {{ getFavouriteNews.length }}
        <div class="news-favourite-list">
            <div class="news-favourites-card" v-for="item in getFavouriteNews" :href="'/news/' + item.ts">
                <router-link v-bind:to="'/news/' + item.ts" class="news-favourites-card__content">
                    <div>
                        <div class="news-favourites-card__content__title">{{ item.title }}</div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
    <div class="news-favourites" v-else>Нет избранного</div>
</template>

<script>
    export default {
        computed: {
            getFavouriteNews: function() {
                return this.$store.state.favouriteNews
            }
        },
        mounted() {
            this.$store.dispatch('getFavouritesNews');
        }
    }
</script>