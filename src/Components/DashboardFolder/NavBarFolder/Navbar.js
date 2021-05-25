import React, { useState } from 'react'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import NavbarStyles from './NavbarStyle'

function Navbar(props) {
    const history = useHistory()
    const classes = NavbarStyles()

    const name = JSON.stringify(localStorage.getItem("name"))

    const feedbackHandler = () => {
        history.push("./dashboard2")
    }

    const backHandler = () => {
        history.push('./dashboard')
    }

    const logoutHandler = () => {
        localStorage.setItem("isLoggedin", false)
        history.push('./')
    }
    
    return (
        <div>
            <AppBar className={classes.appbar}>
                <Toolbar>
                    <Typography className={classes.user_name}> 
                        {JSON.parse(name)} 
                    </Typography>
                    <Typography className={classes.tb}>                        
                        {
                            props.dash ? 
                            <Button onClick={feedbackHandler}>Add Feedback</Button>
                            : 
                            <Button onClick={backHandler}>Back</Button>  
                        }                            
                        <Button onClick={logoutHandler}>Logout</Button>
                    </Typography>                    
                </Toolbar>
            </AppBar>
        </div> )
    }

export default Navbar
