import {useGetNewsQuery} from "../redux/fakeNewsAPI";
import OutlinedCard from "./OutlinedCard";

const NewsPage = () => {
    const {data: news = [], isError, isLoading} = useGetNewsQuery();
    return (
        <div>
            {isLoading && <p>Завантажуємо...</p>}
            {isError && <p>Помилочка...</p>}
            {news.length > 0 && news.map(
                (newsItem) => (<OutlinedCard key={newsItem.id} newsItem={newsItem}/>)
            )}
        </div>
    )
}

export default NewsPage