import {Grid,Button,Typography,Card} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarView from './StarView';
import Avatar from '@material-ui/core/Avatar';
import AvatarImage from './../images/avatar.png';
import {useStyles} from './Styles.js'

export default function LeftSide({data}) {
    const classes = useStyles();
    
    return (
        <Grid item xs={6} lg={6} sm={12} style={{paddingRight:"27px"}}>
            <Typography className={classes.desc}>
                {data.description}
            </Typography>
            <Card className={classes.card} elevation={0} style={{color:"#3f51b5"}}>
                <div style={{display:"flex",alignItems:"center",margin:"15px 0"}}>
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        <img src={AvatarImage} alt="logo" />
                    </Avatar>
                    <Typography style={{fontWeight:"bolder",marginLeft:"5px"}}>
                        {data.author}
                    </Typography>
                </div>
            </Card>
            <div>
                <p style={{display:"flex",margin:"0 0 10px 0"}}>
                    <StarView count={5} /> &nbsp; <span style={{color:"grey"}}>{data.totalReviews} total reviews for this teacher</span>
                </p>
                <p style={{display:"flex",margin:"10px 0"}}>
                    <StarView count={5} /> &nbsp; <span style={{color:"grey"}}>{data.classReviews} reviews for this class</span>
                </p>
            </div>
            <h4>Completed by {data.completedLearners} learners</h4><br/>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <Button
                    variant="contained"
                    color="primary"
                    style={{textTransform:"capitalize",padding:"10px",borderRadius:"15px"}}
                    className={classes.button}
                    endIcon={<ArrowForwardIosIcon />}
                >
                    See Class Schedule
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    style={{textTransform:"capitalize",fontWeight:"bolder",border:"none"}}
                    className={classes.button}
                    startIcon={<FavoriteBorderIcon />}
                >
                    Save
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    style={{textTransform:"capitalize",fontWeight:"bolder",border:"none"}}
                    className={classes.button}
                    startIcon={<ShareIcon />}
                >
                    Share
                </Button>
            </div>
        </Grid>      
    )
}