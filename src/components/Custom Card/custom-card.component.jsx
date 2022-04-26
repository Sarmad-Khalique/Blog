import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CustomCard = () => {
  return (
    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://images.unsplash.com/photo-1597239450996-ea7c2c564412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Prgramming
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque soluta voluptatem perferendis voluptatum sit dolor consequatur eum ea laudantium eveniet labore, quis illum velit explicabo est, iure vel recusandae ipsum!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
        <Button size="small" color='secondary' variant="contained">Share</Button>
      </CardActions>
    </Card>
  );
}

export default CustomCard;
