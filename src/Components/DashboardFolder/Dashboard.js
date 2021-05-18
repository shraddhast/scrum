import Card  from './CardFolder/Cards'
import React from 'react'
import Navbar from './NavBarFolder/Navbar'
import Cards from './CardFolder/Cards'
import cardData from './CardFolder/CardData'
import { Grid } from '@material-ui/core'

function Dashboard() {
    return (
        <div>
            <Navbar/>
            <Cards/>
        </div>
    )
}

export default Dashboard
