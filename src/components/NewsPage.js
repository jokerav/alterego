import {useGetNewsQuery} from "../redux/fakeNewsAPI";
import OutlinedCard from "./OutlinedCard";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const NewsPage = () => {
    const {data: news = [], isError, isLoading} = useGetNewsQuery();
    return (
        <div>
            {isLoading && <Box sx={{ display: 'flex' }} >
                <CircularProgress size={200} sx={{position: "absolute", left: "50%"}}/>
            </Box>}
            {isError && <p>Помилочка...</p>}
            {news.length > 0 && news.map(
                (newsItem) => (<OutlinedCard key={newsItem.id} newsItem={newsItem}/>)
            )}
        </div>
    )
}

export default NewsPage