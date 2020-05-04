import React, { useEffect, useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Paper, Grid, Typography, Button, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PetList from '../containers/PetList';
import { APP_INITIAL_SESSION_REQUEST, APP_INITIAL_SESSION_SUCCESS, APP_INITIAL_SESSION_FAILURE, getUserInitialState } from '../store/reducers/dashboard/actions';
import { connect } from 'react-redux';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dashboard: {
        marginTop: '50px',
        minHeight: '600px',
        width: '100%',
        maxWidth: '1200px',
        background: '#f8f8f8'
    },
    typographyContainer: {
        margin: '0px 25px',
        ['@media (min-width:960px)']: { // eslint-disable-line no-useless-computed-key
            maxWidth: '960px',
        },
        ['@media (max-width:960px)']: { // eslint-disable-line no-useless-computed-key
            maxWidth: '650px',
        }
    }
});

const DashboardPage = (props) => {
    const theme = useTheme();
    const classes = useStyles();
    const [isFetching, setIsFetching] = useState(true);
    const [list, setList] = useState([1, 2, 3, 4, 5, 6])
    const [listIds, setListIds] = useState([{}, {}, {}, {}, {}, {}, {}])

    // Built to simulate loading when fetching data from API
    // -----
    useEffect(() => {
        props.getUserInitialState(APP_INITIAL_SESSION_REQUEST);
    }, []);

    useEffect(() => {
        if (props.isFetching) {
            setTimeout(
                () => props.getUserInitialState(APP_INITIAL_SESSION_SUCCESS),
                2000)
        }
    }, [props.isFetching]);

    useEffect(() => {
        if (props.listIds && props.listIds.length > 0) {
            setIsFetching(false)
            setList(props.list)
            setListIds(props.listIds)
        }
    }, [props.listIds])
    // -----

    return (
        <div className={classes.root}>
            <Paper
                elevation={0}
                className={classes.dashboard}
                square={true}
            >
                <div className={classes.typographyContainer}>
                    <Typography variant="h5" style={{ color: '#363636', fontSize: '30px' }}>
                        Adoptable Dogs in Your Local Shelter
                </Typography>
                    <Typography variant="body1" style={{ padding: '20px 0px 20px 0px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
                </div>
                <PetList
                    isFetching={isFetching}
                    listIds={listIds}
                    list={list}
                />
            </Paper>
        </div>
    )
}

const mapStateToProps = state => ({
    list: state.dashboard.list,
    listIds: state.dashboard.listIds,
    isFetching: state.dashboard.isFetching
});

const mapDispatchToProps = dispatch => ({
    getUserInitialState: (action) => dispatch(getUserInitialState(action))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardPage)
