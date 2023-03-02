import {useGetPopularMoviesQuery} from "../redux/filmsAPI"
import MediaCard from "./MediaCard";
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import {setPopularPage} from "../redux/pagesSlice";
import {useDispatch, useSelector} from "react-redux";
import {getPopularPage} from "../redux/selectors";
import {useTranslation} from "react-i18next";
import Container from "@mui/material/Container";
import {useEffect, useState} from "react";

const PopularPage = () => {
    const dispatch = useDispatch();
    const page = useSelector(getPopularPage);
    const {t} = useTranslation();
    const onPaginationChange = (page) => {
        dispatch(setPopularPage({page}));
    }

    let [visibleMovie, setvisibleMovie] = useState([])
    const {data = [], isError, isLoading} = useGetPopularMoviesQuery(page);

    useEffect(() => {
        setvisibleMovie([...visibleMovie])
    }, [visibleMovie])

    useEffect(() => {
        if (data?.results?.length > 0) {
            setvisibleMovie([...data.results])
        }
    }, [data.results])


    const deleteVisibleMovie = id => {
        const newRes = visibleMovie.filter(mov => mov.id !== id);
        visibleMovie = newRes
    }
    return (
        <Container style={{padding: "20px 20px"}}>
            <h2 style={{textAlign: "center"}}>{t("Popular films")}</h2>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error...</p>}
            <Grid container spacing={2}>
                {visibleMovie.map(
                    movieItem =>
                        <Grid item xs={3}>
                            <MediaCard
                                key={movieItem.id}
                                movie={movieItem}
                                deleteVisibleMovie={deleteVisibleMovie}
                            />
                        </Grid>
                )}
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
export default PopularPage
