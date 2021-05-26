import React, { useEffect, useState } from "react";
import axios from "axios"
import CardStyles from './CardStyles'
import { Card, CardContent, CardActions, Grid, Typography} from '@material-ui/core'

function Cards() {

  const [state, setstate] = useState({
    comment:[] ,
    sendby:""
  })
  
  useEffect(() => {
    axios({
      method: 'get',
      url: `${process.env.REACT_APP_URL}/user/allFeedback`,
      headers: {
        Authorization: 
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUxYmNkZGQwLTljNDMtNGQ2MC1iMjE0LTQ5YTBiOGFlYzQ2OCIsImVtYWlsIjoicG9vamEubGFuZGVAZ21haWwuY29tIiwiaWF0IjoxNjIxNDk1MDA2fQ.qj-b_CFxZh9CjuUeL4ii5oivXWimVgcom7iFWcFt0gA'
      },
     })
      .then( res => { setstate({comment : res.data.data})} )
      .catch(err => console.log(err))  
    }, [])

  const { comment } = state
  console.log(comment)
  const classes = CardStyles()
  return (

    <div> 
        <Grid container className={classes.grid}>
              {
                comment && comment.map((value) => (
                  <Grid item xs={12} sm={6} md={4} lg={4} spacing={4}>   
                    <Card className={classes.root}>
                      <CardContent>
                        <Typography className={classes.title} color="textSecondary">FeedBack</Typography>
                        <Typography component="p" className={classes.content}> {value.feedback}</Typography>
                        <CardActions className={classes.action}><small>Employee id:{value.userid}</small></CardActions>           
                        <CardActions className={classes.action}><small>Created date:{value.created_date}</small></CardActions>           
                      </CardContent>
                    </Card> 
                  </Grid> 
                ))
              }
              </Grid>
      {/* <Grid container>
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
      </Grid> */}
    </div>
  );
}

export default Cards;
