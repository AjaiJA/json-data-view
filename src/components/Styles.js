import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        boxShadow:"none"
    },
    avatar: {
        backgroundColor:"white",
    },
    card:{
        padding:"0px",margin:"0px",
        boxShadow:"none"
    },
    desc:{
        fontSize:"19px",
        lineHeight:"29px",
        fontWeight:"bolder",
        wordSpacing:"3px"
    }
}));

export {useStyles}