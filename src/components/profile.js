import {useSelector, useDispatch} from "react-redux";
import {getFavorite} from '../redux/selectors'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import {removeFromFavorite} from "../redux/favoriteSlise";

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));
const ProfilePage = () => {
    const dispatch = useDispatch();
    const favorite = useSelector(getFavorite);
    return (
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Favorite movie
                    </Typography>
                    {favorite.length>0?
                    <Demo>
                        <List>
                            {favorite.map(movie=>
                                <ListItem
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteIcon onClick={()=>dispatch(removeFromFavorite({id:movie.id}))}/>
                                        </IconButton>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <TurnedInIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={movie.title}
                                    />
                                </ListItem>
                            )}
                        </List>
                    </Demo>:
                        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                            There's nothing here yet
                        </Typography>}
                </Grid>
            </Grid>
        </Box>
    );
}
export default ProfilePage