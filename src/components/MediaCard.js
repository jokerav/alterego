import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {addTofavorite, removeFromFavorite} from "../redux/favoriteSlise";
import {useDispatch, useSelector} from "react-redux";
import {getFavorite, getLoggedIn} from "../redux/selectors";
import {useLocation, useNavigate} from 'react-router-dom';
import {useTranslation} from "react-i18next";

export default function MediaCard({movie}) {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {t} = useTranslation();
    const favorite = useSelector(getFavorite);
    const isLoggedIn = useSelector(getLoggedIn);
    const {title, overview, backdrop_path, id} = movie;
    const imgPath = 'https://image.tmdb.org/t/p/w500';
    const chekMovieInFavorite = id => {
        let inFavorite = false;
        favorite.forEach(movie => {
                if (movie.id === id) {
                    inFavorite = true
                }})
        return inFavorite
    }
    const addMovie = id => {
        if (chekMovieInFavorite(id)) {
            return
        }
        dispatch(addTofavorite({id, title}));
    }
    const removeMovie = id => {
        if (!chekMovieInFavorite(id)) {
            return
        }
        dispatch(removeFromFavorite({id}))
    }

    return (
        <Card sx={{maxWidth: 345}}>
            <CardMedia
                sx={{height: 140}}
                image={`${imgPath}${backdrop_path}`}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {overview}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=>navigate(`/movies/${movie.id}`,{state:{ from: location }})}>
                    {t("Details")}
                </Button>
                {isLoggedIn && (
                    chekMovieInFavorite(id) ?
                        <Button size='small' onClick={() => removeMovie(id)}>{t("Delete from favorite")}</Button> :
                        <Button size="small" onClick={() => addMovie(id)}>{t("To Favorite")}</Button>
                )}
            </CardActions>
        </Card>
    );
}
