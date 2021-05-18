import { makeStyles } from '@material-ui/core/styles';

const Cards2Styles = makeStyles((theme) => ({
    root:{
        marginTop:"25%",
        height:"325px",
        marginLeft:"5%",
        marginRight:"5%",
        backgroundColor:"lightgreen"
    },
    media:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        width:"25%",
        height:"100px",
        marginTop:"15%",
        marginLeft:"35%",
        borderRadius:"50%"
    },
    action:{
        display:"flex",
        justifyContent:"center"
    },
    small:{
        display:"flex",
        justifyContent:"flex-start"
    },
    max_count:{
        display:"flex",
        justifyContent:"flex-end"
    },


}))

export default Cards2Styles