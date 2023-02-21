
import {useGetTrandingMoviesQuery} from "../redux/filmsAPI"
import {useGetPopulartMoviesQuery} from "../redux/filmsAPI";


const NewsPage = () => {
//     const {data: news = [], isError, isLoading} = useGetNewsQuery();
//     return (
//         <div>
//             {isLoading && <Box sx={{ display: 'flex' }} >
//                 <CircularProgress size={200} sx={{position: "absolute", left: "50%"}}/>
//             </Box>}
//             {isError && <p>Помилочка...</p>}
//             {news.length > 0 && news.map(
//                 (newsItem) => (<OutlinedCard key={newsItem.id} newsItem={newsItem}/>)
//             )}
//         </div>
//     )
    const {data} = useGetTrandingMoviesQuery();
    // const  {data} = useGetPopulartMoviesQuery();
    console.log(data)
    return(
        <p>Тут будуть фільми</p>
    )

}

export default NewsPage