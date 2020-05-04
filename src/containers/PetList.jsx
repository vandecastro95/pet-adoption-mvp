import React from 'react';
import { Paper, Grid, Typography, Button } from '@material-ui/core';
import PetListItem from '../components/PetListItem';

export default ({
    list,
    listIds,
    isFetching
}) => {
    return (
        <Grid container spacing={0}>
            {
                listIds.map((id, index) => {
                    return (
                        <Grid item xs={12} sm={8} md={5} lg={4} xl={4} key={index}>
                            <PetListItem
                                item={list[id]}
                                isFetching={isFetching}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}
