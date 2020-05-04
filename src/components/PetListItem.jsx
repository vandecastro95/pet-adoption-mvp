import React, { useState } from 'react';
import { Paper, Grid, Typography, Button, CardMedia, Zoom } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';

export default withStyles({
    root: {
        maxHeight: '400px',
        maxWidth: '450px',
        margin: '25px',
        background: '#F8F8F8',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all .3s',
        cursor: 'pointer',
        "&:hover": {
            boxShadow: 'rgba(0, 0, 0, 0.5) 0px 2px 8px',
            background: '#ffffff'
        }
    },
    imageContainer: {
        height: '240px',
    },
    infoContainer: {
        height: '60px',
        color: 'rgb(34, 34, 34)',
        padding: '10px'

    }
})(({ classes, item, isFetching }) => {

    return !isFetching ? (
        <Zoom in={!isFetching}>
            <Paper className={classes.root} elevation={0} square={true}>
                <div className={classes.imageContainer}>

                    <img
                        src={item.avatar}
                        style={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                            transition: 'all .3s linear',
                        }}
                        alt={item.name}
                    />
                </div>
                <div className={classes.infoContainer}>
                    <Typography variant="h6" style={{ lineHeight: '1', margin: '2px 0px' }}>
                        {item.name}
                    </Typography>
            Adult {item.breed}
                </div>
            </Paper>
        </Zoom>
    )
        : (
            <Zoom in={isFetching}>
                <Paper className={classes.root} elevation={0} square={true}>
                    <div className={classes.imageContainer}>
                        <Skeleton variant="rect" width='100%' height='240px' animation="wave" />
                    </div>
                    <div className={classes.infoContainer}>
                        <Skeleton variant="text" animation="wave" />
                        <Skeleton variant="text" animation="wave" />
                    </div>
                </Paper>
            </Zoom>
        )
});
