import React, { useState }  from 'react'
import LoginStyles  from './LoginStyles'
import {useHistory} from 'react-router-dom'
import { Paper, Grid,TextField, Button, Typography, FormControl} from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import validateInfo from './Validation';

function Login() {
    const classes = LoginStyles();
    const history = useHistory()

    const [errors, seterrors] = useState({ })
    
    const [state, setstate] = useState({
        email:"",
        password:""
    })
    const {email, password} = state

    const changeHandler = (e) => {
        const {name, value} = e.target 
        setstate({
           ...state,
           [name]: value
        })
    }

    const clickHandler = () => {
        history.push("/Register")
    }

    const Visibility = <VisibilityIcon className={classes.visibles}/>
    const NonVisibility = <VisibilityOffIcon className={classes.visibles}/>
    const [visible, setvisible] = useState(false)
    
    const toggleHandler = () => {
        setvisible( visible ? false : true)
    }

    const loginHandler = (e) => {
        e.preventDefault()
        seterrors(validateInfo(state)) 
               
    }
    
    return (        
            <Grid>
                <Paper className={classes.page}>                    
                    <h1> Login</h1>
                    
                    <TextField label="Email" name="email" value={email} onChange={changeHandler}
                    className={classes.text_field} /><br/>
                    <small className={classes.noti}> {errors.email && <p>{errors.email}</p>} </small> 

                    
                    <TextField label="Password" name="password" value={password} onChange={changeHandler}
                        type={visible ? "text" : "password"} className={classes.text_field}/>
                        <i onClick={toggleHandler}> {visible ? Visibility: NonVisibility}</i>
                        <small className={classes.noti}> {errors.password && <p>{errors.password}</p>} </small> 
                    
                    <Button variant="contained" color="primary" className={classes.buttons1} type="submit" 
                        onClick={loginHandler}>Login</Button><br/>
                    
                    <Button variant="contained" color="primary" className={classes.buttons1}
                        onClick={clickHandler}>Register</Button>
                    
                    <Typography className={classes.if_new}> Register if New user</Typography>
                   
                </Paper>
            </Grid>
   )
}

export default Login
