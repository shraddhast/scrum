import React from "react";
import CardStyles from './CardStyles'
import { Card, CardContent, CardActions, Grid, Typography} from '@material-ui/core'
import cardData from "./CardData"

function Cards(props) {

  const classes = CardStyles()
  return (

    <div> 
      <Grid container>
      {
        cardData.map((value) => (
          <Grid item xs={4} sm={6} md={4} lg={4} spacing={4}>   
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
      {/* <Grid item xs={4} sm={6} md={4} lg={4} spacing={4}>   
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary">FeedBack</Typography>
            <Typography component="p" className={classes.content}> {props.comment}</Typography>
            <CardActions className={classes.action}><small>Sent by:{props.name}</small></CardActions>           
          </CardContent>
        </Card> 
      </Grid>  */}
    </div>
  );
}

export default Cards;
