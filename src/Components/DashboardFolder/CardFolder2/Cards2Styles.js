import { makeStyles } from '@material-ui/core/styles';

const Cards2Styles = makeStyles((theme) => ({
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
    btn:{
        backgroundColor:"#81d4fa",
        color:"black",
        
    }


}))

export default Cards2Styles