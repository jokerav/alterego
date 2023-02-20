import {useGetNewsQuery} from "../redux/fakeNewsAPI";

const NewsPage = ()=>{
    const { data=[], error, isLoading} = useGetNewsQuery();
    console.log(data)
    return(
        <div>
        <p>This is News Page</p>
    {isLoading && <p>Завантажуємо...</p>}
    {error && <p>Помилочка...</p>}

        </div>
    )
}

export default NewsPage