import {useGetNewsQuery} from "../redux/fakeNewsAPI";

const NewsPage = () => {
    const {data: news=[], isError, isLoading} = useGetNewsQuery();
    return (
        <div>
            <p>This is News Page</p>
            <ul>
            {isLoading && <p>Завантажуємо...</p>}
            {isError && <p>Помилочка...</p>}
            {news.length>0 && news.map(
                newsItem=>(<li key={newsItem.id}>{newsItem.title}</li>)
            )}
                </ul>
        </div>
    )
}

export default NewsPage