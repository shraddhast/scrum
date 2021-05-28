import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import Register from './Register'

function Register1() {

    const history = useHistory()
    const isLoggedin = JSON.parse(localStorage.getItem("isLoggedin"));     
    useEffect(() => {
        if(isLoggedin){
            history.push("./dashboard")}
        else{
            history.push("./register")}       
    }, [isLoggedin])
    
    return (
        <div>
            <Register/>
        </div>
    )
}

export default Register1
