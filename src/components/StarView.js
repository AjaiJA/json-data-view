import React from 'react'
import StarIcon from '@material-ui/icons/Star';

export default function StarView({count}) {
    const rows = [];
    for (let i = 0; i < 5; i++) {
        rows.push(
            <StarIcon style={{fontSize:"19px",color:"orange"}} />
        );
    }
    return (
        <div>
            {rows}
        </div>
    )
}
