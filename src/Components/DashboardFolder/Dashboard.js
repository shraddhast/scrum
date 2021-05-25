import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import Navbar from './NavBarFolder/Navbar'
import Cards from './CardFolder/Cards'

function Dashboard() {
    const history = useHistory()
    const isLoggedin = JSON.parse(localStorage.getItem("isLoggedin"));     
    
    useEffect(() => {
        if(isLoggedin){
            history.push("./dashboard")
        }
        else{
            history.push("./")
        }
       
    }, [isLoggedin])
    
    return (
        <div>
            <Navbar dash="dash"/>
            <Cards/>
        </div>
    )
}

export default Dashboard
