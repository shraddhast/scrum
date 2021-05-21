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
    const history = useHistory()

    const [sucesslog, setsucesslog] = useState()
    const [errors, seterrors] = useState({})
    const [state, setstate] = useState({
        name : "",
        email : "",
        profile_image: null,
    })
    
    const {name, email, profile_image} = state

    const changeHandler = (e) => {
        const {name, value} = e.target 
        setstate({
           ...state,
           [name]: value,         
        })
    }
    const onFileChange = event => { 
        setstate({ ...state , profile_image: event.target.files[0] }); 
      }; 
  
    const registerHandler = (e) => {
        e.preventDefault();
        seterrors((validateInfo(state)))  
        status()    
    }

    function status(){

        const formData = new FormData();  
        formData.append( "profile_image",  profile_image); 
        formData.append("email", state.email);
        formData.append("name", state.name);
        console.log(profile_image)                  
            
        axios({
            method: 'post',
            url: `${Baseurl}/welcome` ,        
            data: formData ,
            headers: {
                Accept: "application/json",
                'Content-Type': 'multipart/form-data'
                },            
            })
            .then(res => {                   
                if(res.data.success){
                    alert("Registration sucessful")
                    history.push("./") }
                else{
                    history.push("./register")}    
                })          
            .catch(err => alert("Invalid data or Already registered"))                                  
        }

    const clickHandler = () => {
        history.push("./")
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

                    <div className="input-group mb-3">
                        <input type="file" className="form-control" accept=" .jpg, .jpeg"
                          onChange={onFileChange} />
                    </div>
                    
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
