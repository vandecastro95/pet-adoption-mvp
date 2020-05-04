import React from 'react';
import { Paper, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PetsIcon from '@material-ui/icons/Pets';

const useStyles = makeStyles({
    root: {
        background: '#ffffff',
        width: '100%',
        color: 'primary',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        width: '100%',
        height: '100%',
        maxWidth: '1200px',
        display: 'flex',
        alignItems: 'center',
    },
    header_ButtonGroup: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    header_ButtonGroupDiv: {
        paddingRight: '10px',
        display: 'flex',
        justifyContent: 'space-around',
        maxWidth: '190px',
        width: '100%'
    },
    header_signUpButton: {
        background: '#F7F7F7'
    },
    header_icon: {
        width: '100%',
        margin: '0px 25px',
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            display: 'flex',
            justifyContent: 'center',
        }
    }
});

export default (props) => {
    const classes = useStyles(props);
    return (
        <Paper
            square={true}
            className={classes.root}
            elevation={0}
        >
            <Grid container spacing={0} className={classes.header}>
                <Grid item xs={2}>
                    <div className={classes.header_icon}>
                        <PetsIcon />
                    </div>
                </Grid>
                <Grid item xs={10} className={classes.header_ButtonGroup}>
                    <div className={classes.header_ButtonGroupDiv}>
                        <Button>
                            Log in
                        </Button>
                        <Button variant='outlined' color="secondary" style={{ borderRadius: '20px' }}>
                            Sign up
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </Paper >
    )
}