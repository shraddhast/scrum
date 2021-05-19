import React, { useState , useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import RegisterStyles from './RegisterStyle'
import { Paper, Grid,TextField, Button, Typography} from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import validateInfo from './Validate';
import Baseurl from '../BaseUrl';


function Register() {

    const classes =  RegisterStyles();
    
    const [errors, seterrors] = useState({})
    const [state, setstate] = useState({
        name : "",
        email : "",
        // password:"",
        // cpassword:""
    })
    const {name, email, password, cpassword} = state

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
        Data()
        // axios.post( `${Baseurl}/welcome`, state )
        // .then(res => console.log(res) )
        // .catch(err => console.log(err) )  

    }
    const Data = () => {
        const employee = JSON.parse(localStorage.getItem("employee") || "[]")
        const employeeData = [...employee]

        if(employeeData.length === 0){
            employeeData.push(state)
           localStorage.setItem('employee',JSON.stringify(employeeData))
           }

         else{
                let newlist = employeeData.filter((val)=>{
                    return val.email == state.email                    
                })
                console.log(employeeData)
                if(newlist.length !== 0 ){
                    alert("Email not entered or already registered email")}
                else{
                    employeeData.push(state)
                    localStorage.setItem("user",JSON.stringify(employeeData))
                    alert("Registration done sucessfully")
                }
            }
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
             <Grid container className={classes.grid}>
                <Paper className={classes.page}>
                    <h1>Registration</h1>

                    <TextField label="Employee Name" name="name" value={name} onChange={changeHandler}
                        className={classes.text_field}/><br/>
                         <small className={classes.noti}> {errors.name && <p>{errors.name}</p>} </small> 


                    <TextField label="Email" name="email" value={email} onChange={changeHandler}
                        className={classes.text_field}/><br/>
                         <small className={classes.noti}> {errors.email && <p>{errors.email}</p>} </small> 

                    
                    {/* <TextField label="Password" name="password" value={password} onChange={changeHandler}
                        type={visible ? "text" : "password"} className={classes.text_field}/>
                        <i onClick={toggleHandler}>{visible ? Visibility : NonVisibility}</i>
                        <small className={classes.noti}> {errors.password && <p>{errors.password}</p>} </small> 
                    
                    <TextField label="Confirm Password" name="cpassword" value={cpassword} onChange={changeHandler}
                        type={eye ? "text" : "password"} className={classes.text_field}/>
                        <i onClick={eyeHandler}>{eye ? Visibility : NonVisibility}</i>
                        <small className={classes.noti}> {errors.cpassword && <p>{errors.cpassword}</p>} </small> 
                         */}
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
