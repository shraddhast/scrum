import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import Login from './Login'

function Login1() {
    const history = useHistory()
    const isLoggedin = JSON.parse(localStorage.getItem("isLoggedin"));
     
    useEffect(() => {
       
        if(isLoggedin){
            history.push("./dashboard")}
        else{
            history.push("./")}       
    }, [isLoggedin])
    
    return (
        <div>
            <Login/>
        </div>
    )
}

export default Login1
