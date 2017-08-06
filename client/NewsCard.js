import 'styles/style.scss';

class News {
    constructor() {
    }

    render(){
        const data = window['m_auto'];

        console.log(data);

        var html=`
        <div class="ya-news__title">
            <a href="//news.yandex.ru/" target="_blank">
                Яндекс.Новости
            </a>
        </div>`;

        for(var i=0; i<data.length; i++)
        {
            var item=data[i];
            html+=`
            <div>
                <span class="ya-news__date">
                    ${item.date}&nbsp;${item.time}&nbsp;
                </span>
                <span class="ya-news__title">
                    <a href="${item.url}" target="_blank">
                        ${item.title}
                    </a>
                </span>
            </div>
            <div class="ya-news__description">
                ${item.descr}
            </div>`;
        }
        html+=`
        <div class="ya-news__all">
            <a href="//news.yandex.ru/" target="_blank">
                Все новости на ${formatDate(window.update_time_t)}
            </a>
        </div>`;
        
        document.getElementById('news').innerHTML += html

        function formatDate(ts)
        {
        var d=new Date(ts*1000);
        return d.getHours()+':'+('0'+d.getMinutes()).substr(-2);
        }
    }
}

export default News