export default {
    render(h) {
        return (
            <div class="container" >
                <h1 class="page__title">Новостная лента</h1>
                <favourites></favourites>
                <router-view></router-view>
            </div>
        );
    }
};