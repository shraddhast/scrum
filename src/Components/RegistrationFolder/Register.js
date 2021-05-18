import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import RegisterStyles from './RegisterStyle'
import { Paper, Grid,TextField, Button, Typography} from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import validateInfo from './Validate';


function Register() {

    const classes =  RegisterStyles();
    
    const [errors, seterrors] = useState({})
    const [state, setstate] = useState({
        email:"",
        password:"",
        cpassword:""
    })
    const {email, password, cpassword} = state

    const changeHandler = (e) => {
        const {name, value} = e.target 
        setstate({
           ...state,
           [name]: value
        })
    }

    const registerHandler = (e) => {
        e.preventDefault();
        seterrors((validateInfo(state)))
    }
    const history = useHistory()
    const clickHandler = () => {
        history.push("./")
    }
    const Visibility = <VisibilityIcon className={classes.visible}/>
    const NonVisibility = <VisibilityOffIcon className={classes.visible}/>
    
    const [visible, setvisible] = useState(false)
    const [eye, seteye] = useState(false)
    const toggleHandler = () => {
        setvisible( visible ? false : true)
    }
    const eyeHandler = () => {
        seteye( eye ? false : true)
    }
    
    return (
        <div>
             <Grid>
                <Paper className={classes.page}>
                    <h1>Registration</h1>
                    <TextField label="Email" name="email" value={email} onChange={changeHandler}
                        className={classes.text_field}/><br/>
                         <small className={classes.noti}> {errors.email && <p>{errors.email}</p>} </small> 

                    
                    <TextField label="Password" name="password" value={password} onChange={changeHandler}
                        type={visible ? "text" : "password"} className={classes.text_field}/>
                        <i onClick={toggleHandler}>{visible ? Visibility : NonVisibility}</i>
                        <small className={classes.noti}> {errors.password && <p>{errors.password}</p>} </small> 
                    
                    <TextField label="Confirm Password" name="cpassword" value={cpassword} onChange={changeHandler}
                        type={eye ? "text" : "password"} className={classes.text_field}/>
                        <i onClick={eyeHandler}>{eye ? Visibility : NonVisibility}</i>
                        <small className={classes.noti}> {errors.cpassword && <p>{errors.cpassword}</p>} </small> 
                        
                    <Button variant="contained" color="primary" type="submit" className={classes.buttons1} onClick={registerHandler}>
                        Register</Button>

                    <Button variant="contained" color="primary" className={classes.buttons1}
                        onClick={clickHandler}>Login</Button>
                                                        
                </Paper>
            </Grid>
        </div>
    )
}

export default Register
