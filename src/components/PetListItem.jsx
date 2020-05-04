import React from 'react';
import { Paper, Grid, Typography, Button, CardMedia } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export default withStyles({
    root: {
        maxHeight: '300px',
        margin: '25px',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '6px'
    },
    imageContainer: {
        height: '300px',
        width: '100%',
        overflow: 'hidden'
    },
    infoContainer: {
        height: '50px'
    }
})(({ classes, name, avatar }) => (
    <Paper className={classes.root} elevation={0}>
        <div className={classes.imageContainer}>
            <CardMedia
                src={avatar}
                style={{
                    height: '100%',
                    width: '100%'
                }}
            />
        </div>
        <div className={classes.infoContainer}>
            {console.log(name)}
            </div>
    </Paper>
));
