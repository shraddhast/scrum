import { makeStyles } from '@material-ui/core/styles';

const NavbarStyles = makeStyles((theme) => ({ 

    appbar:{
        display:"flex",
        background:"#0277bd"
    },
    tb:{
        marginLeft:"auto"
    },
    user_name:{
        fontSize: 22,
        fontWeight:"bold"

    }

}))

 export default NavbarStyles