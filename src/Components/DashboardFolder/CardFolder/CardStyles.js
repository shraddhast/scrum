import { makeStyles } from '@material-ui/core/styles';

const CardStyles = makeStyles((theme) => ({
    root:{
        marginTop:"25%",
        height:"300px",
        marginLeft:"5%"
    },
    title:{
        display:"flex",
        justifyContent:"flex-start",
        background:"yellow",
        padding:"2%",
        color:"black",
        marginTop:"5%",
        
    },
    content:{
        display:"flex",
        justifyContent:"flex-start",
        height:"175px",
        paddingTop:"5%"
    },
    action:{
        display: "flex",
        justifyContent: "flex-end"
        //marginLeft:"70%",

    },
 


 }))

 export default CardStyles