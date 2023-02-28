import {useGetTopRatedMoviesQuery} from "../redux/filmsAPI"
import MediaCard from "./MediaCard";
import Grid from '@mui/material/Grid';
import Pagination from "@mui/material/Pagination";
import {setTopRatedPage} from "../redux/pagesSlice";
import {useDispatch, useSelector} from "react-redux";
import {getTopRatedPage} from "../redux/selectors";
import {useTranslation} from "react-i18next";

const TopRatedPage = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation();

    const page = useSelector(getTopRatedPage);
    const onPaginationChange=(page)=>{
        dispatch(setTopRatedPage({page}));
    }

    const {data = [], isError, isLoading} = useGetTopRatedMoviesQuery(page);

    return (
        <div>
            <h2 style={{textAlign:"center"}}>{t("Top rated movies")}</h2>
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
export default TopRatedPage