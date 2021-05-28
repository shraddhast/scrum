import React, { useEffect, useState }  from 'react'
import LoginStyles  from './LoginStyles'
import {useHistory} from 'react-router-dom'
import { Paper, Grid,TextField, Button, Typography,} from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import validateInfo from '../Validation';
import axios from 'axios';

function Login(props) {
    const classes = LoginStyles();
    const history = useHistory()

    const [sucesslog, setsucesslog] = useState()
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
        const valid = validateInfo(state)
        if(Object.keys(valid).length !== 0) {
            seterrors(valid) }
        else{
            abc()
        }                          
    }

    function abc () {
        axios({
            method: 'post',
            url: `${process.env.REACT_APP_URL}/welcome/login`,
            data: state,
            })
        .then( res => {  
            if(res.data.success){
                localStorage.setItem("isLoggedin", true)
                localStorage.setItem("name",res.data.data.name)
                history.push("/dashboard")   }
        })
        .catch(err => alert("Invalid login ") )
        console.log(sucesslog) 
    }   
   
    return (        
            <Grid container className={classes.grid}>
                <Paper className={classes.page} >                   
                    <h1> Login</h1>
                    
                    <Typography>
                        <TextField label="Email" name="email" value={email} onChange={changeHandler}
                        className={classes.text_field} />
                        <small className={classes.noti}> {errors.email && <p>{errors.email}</p>} </small> 
                    </Typography>
                    
                    <Typography>
                        <TextField label="Password" name="password" value={password} 
                        onChange={changeHandler}
                        type={visible ? "text" : "password"} className={classes.text_field}/>
                        <i onClick={toggleHandler}> {visible ? Visibility: NonVisibility}</i>
                            <small className={classes.noti}> {errors.password && <p>{errors.password}</p>} 
                            </small> 
                    </Typography>
                    
                    
                    <Typography className={classes.buttons1}>
                        <Button variant="contained" color="primary"  type="submit" 
                        onClick={loginHandler}>Login</Button>
                    </Typography>
                    
                    <Typography className={classes.buttons1}>
                        <Button variant="contained" color="primary" 
                        onClick={clickHandler}>Register</Button>
                    </Typography>
                                        
                    <Typography className={classes.if_new}> Register if New user</Typography>
                         
                </Paper>                
            </Grid>
   )
}

export default Login
