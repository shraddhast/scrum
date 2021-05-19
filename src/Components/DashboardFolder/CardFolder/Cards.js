import React, { useEffect } from "react";
import axios from "axios"
import Baseurl from "/Users/webwerks/scrum/src/Components/BaseUrl"
import CardStyles from './CardStyles'
import { Card, CardContent, CardActions, Grid, Typography} from '@material-ui/core'
import cardData from "./CardData"

function Cards(props) {

  useEffect(() => {
    axios.get(`${Baseurl}/single/feedback`)
    .then(res => console.log(res))
    .catch(err => err)   
    
  }, [])
  
  const classes = CardStyles()
  return (

    <div> 
      <Grid container>
      {
        cardData.map((value) => (
          <Grid item xs={12} sm={6} md={4} lg={4} spacing={4}>   
            <Card className={classes.root}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary">FeedBack</Typography>
                <Typography component="p" className={classes.content}> {value.comment}</Typography>
                <CardActions className={classes.action}><small>Sent by:{value.name}</small></CardActions>           
              </CardContent>
            </Card> 
          </Grid> 
        ))
      }
      </Grid>
    </div>
  );
}

export default Cards;
