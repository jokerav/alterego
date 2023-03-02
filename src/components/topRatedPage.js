import {useGetTopRatedMoviesQuery} from "../redux/filmsAPI"
import MediaCard from "./MediaCard";
import Grid from '@mui/material/Grid';
import Pagination from "@mui/material/Pagination";
import {setTopRatedPage} from "../redux/pagesSlice";
import {useDispatch, useSelector} from "react-redux";
import {getTopRatedPage} from "../redux/selectors";
import {useTranslation} from "react-i18next";
import Container from "@mui/material/Container";
import {useEffect, useState} from "react";

const TopRatedPage = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const page = useSelector(getTopRatedPage);
    const onPaginationChange = (page) => {
        dispatch(setTopRatedPage({page}));
    }
    let [visibleMovie, setvisibleMovie] = useState([])
    const {data = [], isError, isLoading} = useGetTopRatedMoviesQuery(page);
    useEffect(() => {
        if (data?.results?.length > 0) {
            setvisibleMovie([...data.results])
        }
    }, [data.results])

    useEffect(() => {
        setvisibleMovie([...visibleMovie])
    }, [visibleMovie])

    const deleteVisibleMovie = id => {
        const newRes = visibleMovie.filter(mov => mov.id !== id);
        visibleMovie = newRes
    }
    return (
        <Container>
            <h2 style={{textAlign: "center"}}>{t("Top rated movies")}</h2>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error...</p>}
            <Grid container spacing={2}>
                {visibleMovie.map(
                    movieItem => {
                        return (
                            <Grid item xs={3}>
                                <MediaCard key={movieItem.id}
                                           movie={movieItem}
                                           deleteVisibleMovie={deleteVisibleMovie}
                                />
                            </Grid>
                        )
                    })}
            </Grid>
            <Pagination
                count={10}
                color="primary"
                defaultPage={page}
                sx={{paddingTop: '40px', paddingBottom: '30px'}}
                onChange={(_, page) => onPaginationChange(page)}
            />
        </Container>
    )
}
export default TopRatedPage