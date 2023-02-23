import {useSelector} from "react-redux";
import {getFavorite} from '../redux/selectors'
import {useGetMovieDetailQuery} from "../redux/filmsAPI";

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
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

const ProfilePage = () => {
    const favorite = useSelector(getFavorite);
    console.log(favorite);
    function generate(element) {
        return favorite.map((value) =>
            React.cloneElement(element, {
                key: value,
            }),
        );
    }
    const Demo = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
    }));
    const [dense, setDense] = React.useState(false);
    return (
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Favorite movie
                    </Typography>
                    {favorite.length>0?
                    <Demo>
                        <List dense={dense}>
                            {generate(
                                <ListItem
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <FolderIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Single-line item"
                                    />
                                </ListItem>,
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