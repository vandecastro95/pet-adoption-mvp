import React from 'react';
import { Grid} from '@material-ui/core';
import PetListItem from '../components/PetListItem';

export default ({
    list,
    listIds,
    isFetching,
    onClick
}) => {
    return (
        <Grid container spacing={0}>
            {
                listIds.map((id, index) => {
                    return (
                        <Grid item xs={12} sm={8} md={5} lg={4} xl={4} key={index}>
                            <PetListItem
                                id={id}
                                item={list[id]}
                                isFetching={isFetching}
                                onClick={onClick}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}
