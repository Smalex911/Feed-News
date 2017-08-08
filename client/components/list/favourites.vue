<template>
    <div class="news-favourites" v-if="getFavouriteNews.length > 0">
        Избранное: {{ getFavouriteNews.length }}
    </div>
    <div class="news-favourites" v-else>Нет избранного</div>
</template>

<script>
    export default {
        computed: {
            getFavouriteNews: function() {
                return this.$store.state.favouriteNews
            }
        }
    }
</script>