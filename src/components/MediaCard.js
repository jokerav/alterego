import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {addTofavorite, removeFromFavorite} from "../redux/favoriteSlise";
import {useDispatch, useSelector} from "react-redux";
import {getFavorite} from "../redux/selectors";

export default function MediaCard({movie}) {
    const dispatch = useDispatch();
    const favorite = useSelector(getFavorite);
    const {title, overview, backdrop_path, id} = movie;
    const imgPath = 'https://image.tmdb.org/t/p/w500';

    const addMovie = id => {
        if (favorite.includes(id)) {
            return
        }
        dispatch(addTofavorite({id}));
    }
    const removeMovie = id =>{
        if (!favorite.includes(id)) {
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
                <Button size="small">Details</Button>
                {favorite.includes(id) ?
                    <Button size='small' onClick={() => removeMovie(id)}>Delete from favorite</Button> :
                    <Button size="small" onClick={() => addMovie(id)}>To Favorite</Button>}
        </CardActions>
</Card>
);
}
