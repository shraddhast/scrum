import React, { useState } from 'react'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import NavbarStyles from './NavbarStyle'

function Navbar() {
    const history = useHistory()
    const classes = NavbarStyles()

    const name = JSON.stringify(localStorage.getItem("name"))

    const feedbackHandler = () => {
        history.push("./dashboard2")
    }
    const clickHandler = () => {
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
                        <Button onClick={feedbackHandler} >Add Feedback</Button>
                        <Button onClick={clickHandler}>Logout</Button>
                    </Typography>                    
                </Toolbar>
            </AppBar>
        </div> )
    }

export default Navbar
