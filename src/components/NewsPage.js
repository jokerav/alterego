
import {useGetPopularMoviesQuery} from "../redux/filmsAPI"
import MediaCard from "./MediaCard";
const NewsPage = () => {
    const {data = [], isError, isLoading} = useGetPopularMoviesQuery();
    console.log(data.results)
    return(
        <div>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error...</p>}
            {data?.results?.length>0 && data.results.map(movieItem=><MediaCard key={movieItem.id} movie={movieItem}/>)}
        </div>
    )

}

export default NewsPage
