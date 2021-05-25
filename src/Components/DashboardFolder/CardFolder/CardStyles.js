import { makeStyles } from '@material-ui/core/styles';

const CardStyles = makeStyles((theme) => ({
    grid:{
       // background:"#81d4fa"
     },
    root:{
        marginTop:"25%",
        height:"350px",
        marginLeft:"5%",
        marginRight:"5%",
        backgroundColor:"#e1f5fe",
        color:"black"
    },
    title:{
        display:"flex",
        justifyContent:"flex-start",
        background:"#81d4fa",
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