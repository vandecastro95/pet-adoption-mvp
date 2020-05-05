import React, { useEffect, useState } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    getUserInitialState
} from '../store/reducers/dashboard/actions';
import { connect } from 'react-redux';

import PetList from '../containers/PetList';
import PetProfile from '../components/PetProfile';

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
        color: '#484848',
        margin: '0px 25px',
        ['@media (min-width:960px)']: { // eslint-disable-line no-useless-computed-key
            maxWidth: '960px',
        },
        ['@media (max-width:960px)']: { // eslint-disable-line no-useless-computed-key
            maxWidth: '650px',
        }
    }
});


const DashboardPage = ({ isFetching, listIds, list, getUserInitialState }) => {
    const classes = useStyles();

    const [selectedPet, setSelectedPet] = useState(null)
    const [isLoading, setIsLoading] = useState(true);

    const [listState, setListState] = useState([{}, {}, {}, {}, {}, {}, {}])
    const [listIdsState, setListIdsState] = useState([1, 2, 3, 4, 5, 6])

    useEffect(() => {
        // Simulates loading when fetching data from API
        if (isFetching) {
            setTimeout(
                () => getUserInitialState(),
                1500)
        }
    }, []);

    useEffect(() => {
        if (listIds && listIds.length > 0) {
            setIsLoading(false)
            setListState(list)
            setListIdsState(listIds)
        }
    }, [listIds])

    const handleClick = (index) => {
        setSelectedPet(list[index])
    }

    return (
        <div className={classes.root}>
            <Paper
                elevation={0}
                className={classes.dashboard}
                square={true}
            >
                <div className={classes.typographyContainer}>
                    <Typography variant="h5" style={{ color: '#363636', fontSize: '30px', fontWeight: '700' }}>
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
                {
                    selectedPet
                        ? <PetProfile
                            item={selectedPet}
                            onClickBack={() => setSelectedPet(null)}
                        />
                        : <PetList
                            isFetching={isLoading}
                            listIds={listIdsState}
                            list={listState}
                            onClick={handleClick}
                        />
                }

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
    getUserInitialState: () => dispatch(getUserInitialState())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardPage)
