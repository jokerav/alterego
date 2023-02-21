import {useGetPopularMoviesQuery} from "../redux/filmsAPI"
import MediaCard from "./MediaCard";
import Grid from '@mui/material/Grid';

const PopularPage = () => {
    const {data = [], isError, isLoading} = useGetPopularMoviesQuery();
    console.log(data.results)
    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error...</p>}
            <Grid container spacing={3}>
                {
                    data?.results?.length > 0 && data.results.map(
                        movieItem => {
                            return (
                                <Grid item xs={2}>
                                <MediaCard key={movieItem.id}
                                           movie={movieItem}/>
                                </Grid>
                            )
                        })
                }
            </Grid>
        </div>
    )

}

export default PopularPage
