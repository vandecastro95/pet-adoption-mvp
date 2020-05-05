import React from 'react';
import { Paper, Typography, Grow, Grid, Button, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CallIcon from '@material-ui/icons/Call';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        maxWidth: '1200px',
        minHeight: '450px',
        background: '#f8f8f8',
        padding: '0px 25px',
        ['@media (max-width:960px)']: { // eslint-disable-line no-useless-computed-key
            maxWidth: '600px'
        }
    },
    petInfo: {
        padding: '0px 25px',
        ['@media (max-width:960px)']: { // eslint-disable-line no-useless-computed-key
            padding: '0px'
        }
    },
    profileInfo: {
        color: '#484848',

    },
    shelterInfo: {
        paddingTop: '25px',
        margin: '10px 25px',
        background: '#fff',
        color: '#484848',
        ['@media (max-width:960px)']: { // eslint-disable-line no-useless-computed-key
            margin: '0px'
        }
    },
    icons: {
        paddingLeft: '25px'
    },
    ButtonContainer: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    Button: {
        margin: '25px',
    }
});

export default ({ item, onClickBack }) => {

    const classes = useStyles();
    return (
        <Grow in={true} timeout={500}>
            <Paper className={classes.root} elevation={0}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={8} md={6}>
                        <img
                            src={item.avatar}
                            style={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover',
                            }}
                            alt={item.name}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} md={6}>
                        <Grid container spacing={1} className={classes.petInfo}>
                            <Grid item xs={3}>
                                <Typography variant="h5">
                                    <b>Name: </b>
                                </Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant="h5">
                                    <b>{item.name} </b>
                                </Typography>
                            </Grid>
                            <Grid item xs={3} className={classes.profileInfo}>
                                <Typography variant="body1" style={{ fontWeight: '700' }}>
                                    Breed:
                                    </Typography>
                            </Grid>
                            <Grid item xs={9} className={classes.profileInfo}>
                                <Typography variant="body1">
                                    {item.breed}
                                </Typography>
                            </Grid>
                            <Grid item xs={3} className={classes.profileInfo}>
                                <Typography variant="body1" style={{ fontWeight: '700' }}>
                                    Age:
                                    </Typography>
                            </Grid>
                            <Grid item xs={9} className={classes.profileInfo}>
                                <Typography variant="body1">
                                    3 years old
                                    </Typography>
                            </Grid>
                            <Grid item xs={3} className={classes.profileInfo}>
                                <Typography variant="body1" style={{ fontWeight: '700' }}>
                                    About:
                                    </Typography>
                            </Grid>
                            <Grid item xs={9} className={classes.profileInfo}>
                                <Typography variant="body1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.shelterInfo}>
                                <Grid container spacing={1}>
                                    <Grid item xs={3}></Grid>
                                    <Grid item xs={9}>
                                        <Typography variant="body1">
                                            <i>Contact us for information on adopting {item.name}!</i>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant="body1" style={{ fontWeight: '700' }} className={classes.icons}>
                                            <Tooltip title="Address" placement="right">
                                                <HomeIcon aria-label="Address" />
                                            </Tooltip>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={9} className={classes.profileInfo}>
                                        <Typography variant="body1">
                                            No. 221b Baker St, London
                                </Typography>
                                    </Grid><Grid item xs={3}>
                                        <Typography variant="body1" style={{ fontWeight: '700' }} className={classes.icons}>
                                            <Tooltip title="Email Address" placement="right">
                                                <EmailIcon aria-label="Email Address" />
                                            </Tooltip>
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={9} className={classes.profileInfo}>
                                        <Typography variant="body1">
                                            petadoption@email.com
                                         </Typography>
                                    </Grid><Grid item xs={3}>
                                        <Typography variant="body1" style={{ fontWeight: '700' }} className={classes.icons}>
                                            <Tooltip title="Phone number" placement="right">
                                                <CallIcon aria-label="Phone number" />
                                            </Tooltip>
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={9} className={classes.profileInfo}>
                                        <Typography variant="body1">
                                            (900)-000-0000
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} className={classes.ButtonContainer}>
                                        <Button className={classes.Button} onClick={onClickBack} variant='outlined' color="primary">Go Back</Button>
                                    </Grid>

                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Grow>
    )
}