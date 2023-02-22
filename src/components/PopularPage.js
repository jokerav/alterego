import {useGetPopularMoviesQuery} from "../redux/filmsAPI"
import MediaCard from "./MediaCard";
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import {setPopularPage} from "../redux/pagesSlice";
import {useDispatch, useSelector} from "react-redux";
import {getPopularPage} from "../redux/selectors";

const PopularPage = () => {
    const dispatch = useDispatch();
    const page = useSelector(getPopularPage)
    const {data = [], isError, isLoading} = useGetPopularMoviesQuery(page);
    const onPaginationChange=(page)=>{
        dispatch(setPopularPage({page}));
    }
    console.log(page);
    return (
        <div>
            <h2 style={{textAlign: "center"}}>Popular films</h2>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error...</p>}
            <Grid container spacing={3}>
                {data?.results?.length > 0 && data.results.map(
                    movieItem => {
                        return (
                            <Grid item xs={2}>
                                <MediaCard key={movieItem.id}
                                           movie={movieItem}/>
                            </Grid>
                        )
                    })}
            </Grid>
            <Pagination
                count={10}
                color="primary"
                defaultPage={page}
                sx={{paddingTop:'40px', paddingBottom:'30px'}}
                onChange={(_,page)=>onPaginationChange(page)}
            />
        </div>
    )
}
export default PopularPage
