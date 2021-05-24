import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import Cards2 from './CardFolder2/Cards2'
import Navbar from './NavBarFolder/Navbar'

function Dashboard2() {
    const history = useHistory()
    const isLoggedin = JSON.parse(localStorage.getItem("isLoggedin"));     
    
    useEffect(() => {
        if(isLoggedin){
            history.push("./dashboard2")}
        else{
            history.push("./")}       
    }, [isLoggedin])
    
    return (
        <div>
            <Navbar/>
            <Cards2/>
        </div>
    )
}

export default Dashboard2
