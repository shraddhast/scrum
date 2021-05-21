import React, { useState } from 'react'
import axios from 'axios'
import Baseurl from '/Users/webwerks/scrum/src/Components/BaseUrl';
import Cards2Styles from './Cards2Styles'
import { Card, CardContent, CardActions, CardMedia, CardActionArea, Grid, Typography, TextField, Button} from '@material-ui/core'
import cardData2 from './CardData2'

function Cards2() {
    const classes = Cards2Styles()
    
    const [count, setcount] = useState('')
    const changeHandler = (e) => {
        setcount(e.target.value)
        axios({
            method: 'post',
            url: `${Baseurl}/feedback`,            
            data: count,
          })
          .then( res => console.log(res))          
          .catch(err => console.log(err))
    }

    return (
        <div>
            <Grid container>
                {
                cardData2.map((value) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} spacing={4}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia className={classes.media} image={value.image}/>
                                    <CardContent>
                                        <Typography>{value.name}</Typography>
                                        <TextField variant="outlined" placeholder= "Write feedback" fullWidth inputProps={{maxLength:100}}
                                            value={count} onChange={changeHandler}></TextField>
                                        <small className={classes.small}>Max 100 characters</small>
                                        <small className={classes.max_count}>{count.length}/100</small>
                                        <CardActions className={classes.action}>
                                            <Button variant="contained" color="primary">Submit Feedback</Button>
                                        </CardActions>                    
                                    </CardContent>                        
                            </CardActionArea>                    
                        </Card>
                    </Grid> ))
                }    
                
            </Grid>
        </div>
    )
}

export default Cards2
