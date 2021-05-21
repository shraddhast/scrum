import React, { useState } from 'react'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import NavbarStyles from './NavbarStyle'

function Navbar() {
    const history = useHistory()
    const classes = NavbarStyles()
    
    const [log, setlog] = useState(true)
    
    const feedbackHandler = () => {
        history.push("./dashboard2")
    }
    const clickHandler = () => {
        setlog(false)
        if(!log){
            history.push('./')
        }
        
    }
    return (
        <div>
            <AppBar className={classes.appbar}>
                <Toolbar className={classes.tb} >
                    <Button onClick={feedbackHandler}>Add Feedback</Button>
                    <Button onClick={clickHandler}>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
