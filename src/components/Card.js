import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 140,
  },
});

export default function CardTodo() {
  const classes = useStyles();
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      console.log(localStorage.getItem("token"));
      let mytoken = localStorage.getItem("token");
      let userId = localStorage.getItem("userId");
    //   const headers = {
    //     Authorization: `Bearer ${mytoken}`,
    //     "My-Custom-Header": "foobar",
    //   };
      const res = await axios.get(
        `https://todo-rest-b.herokuapp.com/todo/${userId}`,
      );
      console.log(res)
      // console.log(req.data.data);
      setTodo(res.data.todo);
      // setUser(req.data.data);
      
    }

    fetchData();
  }, []);console.log(todo.length)

  return (
      <> 
    {todo.map((row) => (
    <Card className={classes.root}>
        
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <h3>{row.title}</h3>
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            <h5>{row.category}</h5>
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography> */}
        </CardContent>
        <CardActions>
        <Button size="small" color="primary">
          Update
        </Button>
        <Button size="small" color="primary">
          Delete
        </Button>
      </CardActions>
      </CardActionArea>
      
     
    </Card>
    ))}
    </>
  );
}
