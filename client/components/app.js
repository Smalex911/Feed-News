export default {
    render(h) {
        return (
            <div class="container" >
                <h1 class="page__title">Новостная лента</h1>
                <router-view></router-view>
            </div>
        );
    }
};