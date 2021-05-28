import { makeStyles } from '@material-ui/core/styles';

const LoginStyles = makeStyles(() => ({
    grid:{
        background:"pink"
    },
    page:{
       justifyContent:"center",
        width:"30%",
        height: "30%",
        margin:"30%",
        marginTop:"5%",
        padding:"5%", 
        background:"lightgreen !important"  
        },
    text_field:{
            width:"100%",
            position:"relative"
        },
    visibles:{
        position:"absolute",
        marginTop:"1%",
        marginLeft:"-15px"           
    },
    buttons1:{
        display:"flex",
        justifyContent:"flex-start" ,
        marginTop:"5% !important"       
    },
    if_new:{
        display:"flex",
        justifyContent:"flex-start"
    },
    noti:{
        color:"red",
        display:"flex",
        justifyContent:"flex-start"
    },

}))

export default LoginStyles
