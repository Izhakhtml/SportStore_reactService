import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function ShirtCard({item}) {
  return (
   <Card sx={{ maxWidth: 345 }} style={{ width:"50%",margin:"10px"}}>
      <CardMedia
        component="img"
        height="140"
        image={item.LinkToImage}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.ShoeType}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.Company}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>      
  );
}
