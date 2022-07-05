import React from 'react'
import {Grid} from '@material-ui/core';
import {useStyles} from './Styles.js'
import LeftSide from './LeftSide.js';
import RightSide from './RightSide.js';

export default function Main({data}) {
    const classes = useStyles();
    return (
        <Grid container>
            <LeftSide classes={classes} data={data}/><br/>
            <RightSide classes={classes} />
        </Grid>
    )
}
