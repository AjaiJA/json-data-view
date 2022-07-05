import {Grid,CardMedia} from '@material-ui/core';
import img1 from './../images/img1.jpg';
import img2 from './../images/img2.jpg';
import img3 from './../images/img3.jpg';

export default function RightSide({classes}) {
    return (
        <Grid item lg={6} xs={6} sm={12}>
                <Grid container>
                    <Grid item xs={6}
                        style={{
                            flexGrow: 0,
                            paddingRight: "5px",
                            flexBasis: "45%"
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="100%"
                            image={img1}
                            alt="image 1"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid item lg={6}>
                            <img src={img2} className="App-logo" alt="image2" />
                        </Grid>
                        <Grid item lg={6}>
                            <img src={img3} className="App-logo" alt="image3" />
                        </Grid>
                    </Grid>
                </Grid>
        </Grid>
    )
}