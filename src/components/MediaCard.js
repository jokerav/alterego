// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {addTofavorite, removeFromFavorite} from "../redux/authSlice";
import {useDispatch, useSelector} from "react-redux";
import {getFavorite, getLoggedIn} from "../redux/selectors";
import {useLocation, useNavigate} from 'react-router-dom';
import {useTranslation} from "react-i18next";
import DeleteIcon from '@mui/icons-material/Delete';


export default function MediaCard({movie,deleteVisibleMovie}) {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {t} = useTranslation();
    // const classes = useStyles();
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
                sx={{height: 140, cursor: "pointer"}}
                image={`${imgPath}${backdrop_path}`}
                title={title}
                onClick={()=>navigate(`/movies/${id}`)}
                // className={classes.root}
                // style={{"&:hover, &.Mui-focusVisible": { scale: 1.3 }}}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{maxHeight:'180px', overflow:"hidden"}}>
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
                <DeleteIcon
                    style={{marginLeft:"auto", cursor: "pointer"}}
                    color="primary"
                    onClick={()=>deleteVisibleMovie(movie.id)}
                />
            </CardActions>
        </Card>
    );
}
