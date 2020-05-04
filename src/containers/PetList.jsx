import React from 'react';
import { Paper, Grid, Typography, Button } from '@material-ui/core';
import PetListItem from '../components/PetListItem';

export default ({ list, listIds }) => {

    return (
        <Grid container spacing={0}>
            {
                listIds.map((id) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={id}>
                            <PetListItem
                                name={list[id].name}
                                avatar={list[id].avatar}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}
