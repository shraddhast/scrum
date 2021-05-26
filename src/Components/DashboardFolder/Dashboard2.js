import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import Cards2 from './CardFolder2/Cards2'
import Navbar from './NavBarFolder/Navbar'
import axios from 'axios'
import { Card, CardContent, CardActions, CardMedia, CardActionArea, Grid, Typography, TextField, Button} from '@material-ui/core'


function Dashboard2() {
    const history = useHistory()
   
    const isLoggedin = JSON.parse(localStorage.getItem("isLoggedin"));   
    const [state, setstate] = useState({
        cardData: []
    })
    const { cardData } = state
    
    useEffect(() => {
        if(isLoggedin){
                    history.push("./dashboard2")}
                else{
                    history.push("./")}       
        axios({
            method: 'get',
            url: `${process.env.REACT_APP_URL}/welcome`,
            headers: {
                Authorization: 
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUxYmNkZGQwLTljNDMtNGQ2MC1iMjE0LTQ5YTBiOGFlYzQ2OCIsImVtYWlsIjoicG9vamEubGFuZGVAZ21haWwuY29tIiwiaWF0IjoxNjIxNDk1MDA2fQ.qj-b_CFxZh9CjuUeL4ii5oivXWimVgcom7iFWcFt0gA'}
          })
            .then( res => { 
                 setstate({ cardData : res.data.data})} )
            .catch(err => console.log(err))  
    }, [isLoggedin])


    return (
        <div>
            <Navbar data="dash2"/>
            <Grid container >
                {
                cardData && cardData.map((value) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} spacing={4}>
                        <Cards2 value={value} />
                    </Grid> ))
                }                    
            </Grid>

        </div>
    )
}

export default Dashboard2
