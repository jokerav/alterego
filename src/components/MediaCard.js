import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import addToFavorite from "../helpers/putToFavorite";

export default function MediaCard({movie}) {
    const {title, overview, backdrop_path, id} = movie;
    const imgPath = 'https://image.tmdb.org/t/p/w500';
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
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
                <Button size="small" onClick={()=>addToFavorite(id)}>To Favorite</Button>
            </CardActions>
        </Card>
    );
}
