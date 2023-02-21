import {useGetTrandingMoviesQuery} from "../redux/filmsAPI"
import MediaCard from "./MediaCard";
import Grid from '@mui/material/Grid';
import {useDispatch, useSelector} from "react-redux";
import {setIntrandPage} from "../redux/pagesSlice";
import Pagination from "@mui/material/Pagination";
import {getInTrandPage} from "../redux/selectors";

const InTrandsPage = () => {
    const dispatch = useDispatch();
    const {data = [], isError, isLoading} = useGetTrandingMoviesQuery();
    const onPaginationChange=(page)=>{
        dispatch(setIntrandPage({page}));
    }
    const page = useSelector(getInTrandPage);
    console.log(page);
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
            <Pagination
                count={10}
                color="primary"
                defaultPage={page}
                onChange={(_,page)=>onPaginationChange(page)}
            />
        </div>
    )
}
export default InTrandsPage