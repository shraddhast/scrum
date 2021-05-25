import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards2Styles from './Cards2Styles'
import { Card, CardContent, CardActions, CardMedia, CardActionArea, Grid, Typography, TextField, Button} from '@material-ui/core'
import cardData2 from './CardData2'
import { isEmptyObj }  from '../../utils'
function Cards2(props) {
    
    const classes = Cards2Styles()
    const [feedback, setfeedback] = useState({})
    const changeHandler = (e) => {
        setfeedback({ feedback : e.target.value})
    }
    
    const clickHandler = () => {
        axios({
            method: 'post',
            headers: {
                Authorization: 
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUxYmNkZGQwLTljNDMtNGQ2MC1iMjE0LTQ5YTBiOGFlYzQ2OCIsImVtYWlsIjoicG9vamEubGFuZGVAZ21haWwuY29tIiwiaWF0IjoxNjIxNDk1MDA2fQ.qj-b_CFxZh9CjuUeL4ii5oivXWimVgcom7iFWcFt0gA'
            },
            url: `${process.env.REACT_APP_URL}/feedback`,            
            data: feedback,
            })
            .then( res => console.log(res))          
            .catch(err => console.log(err))    
    }
    return (    
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn5Udgk7MbZNd5hQNEbiakMQ-qlaQHj35WXA&usqp=CAU"/>
                        <CardContent>
                            <Typography>{props.value.name}</Typography>
                                <Typography value={feedback} onChange={changeHandler} inputProps={{maxLength:100}}>
                                <TextField variant="outlined" placeholder= "Write feedback" fullWidth> </TextField>
                                <small className={classes.small}>Max 100 characters</small>
                                { !isEmptyObj(feedback)  && <small className={classes.max_count}>{feedback.feedback.length}/100</small> }                       
                            </Typography>        
                            <CardActions className={classes.action}>
                                <Button variant="contained" color="primary" onClick={clickHandler} className={classes.btn}>Submit Feedback</Button>
                            </CardActions>                    
                        </CardContent>                        
                </CardActionArea>                    
            </Card>
    )
}

export default Cards2
