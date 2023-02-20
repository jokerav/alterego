import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const card = ({newsItem}) => {
    const {title, body} = newsItem;
    return (<React.Fragment>
        <CardContent>
            <Typography variant="h4" component="div">
                {title}
            </Typography>
            <Typography sx={{mb: 1.5}} color="text.secondary">
                {body}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Delete this news item</Button>
        </CardActions>
    </React.Fragment>)
};

export default function OutlinedCard({newsItem}) {
    return (
        <Box sx={{minWidth: 275}}>
            <Card variant="outlined">{card({newsItem})}</Card>
        </Box>
    );
}