import { makeStyles } from '@material-ui/core/styles';

const RegisterStyles = makeStyles((theme) => ({
    grid:{
        background:"pink"
    },
    page:{
        width:"30%",
        height: "30%",
        margin:"30%",
        marginTop:"5%",
        padding:"5%",
        background:"lightgreen"
        },
    text_field:{
            width:"100%",
            position:"relative"
        },
    visible:{
        position:"absolute",
        marginTop:"1%",
        marginLeft:"-17px"           
    },
    buttons1:{
        display:"flex",
        justifyContent:" flex-end",
        marginTop:"5%"
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
    input_image:{
        marginTop:"5%"
    },


}))

export default RegisterStyles