import React from 'react'
import {Grid} from '@material-ui/core';
import LeftSide from './LeftSide.js';
import RightSide from './RightSide.js';

export default function Main({data}) {
    return (
        <Grid container>
            <LeftSide data={data}/><br/>
            <RightSide />
        </Grid>
    )
}
