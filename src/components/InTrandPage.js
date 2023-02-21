import {useGetTrandingMoviesQuery} from "../redux/filmsAPI"
import MediaCard from "./MediaCard";
import Grid from '@mui/material/Grid';

const InTrandsPage = () => {
    const {data = [], isError, isLoading} = useGetTrandingMoviesQuery();
    console.log(data.results)
    return (
        <div>
            <h2 style={{textAlign:"center"}}>Now in trands</h2>
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
export default InTrandsPage