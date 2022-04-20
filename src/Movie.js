import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Counter } from "./Counter";
export function Movie({ name, poster, rating, starCast, summary }) {
  const styles = {
    color: rating > 8 ? "green" : "red",
  };
  const [show, setShow] = useState(true);
  const summaryStyles = {
    display: show ? "block" : "none",
  };
  return (

    <div className="movie-container">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          img={poster} alt="image" className="movie-poster" />
        <CardContent>
          <div className='head'>
            <h4 className="movie-name">{name} <IconButton onClick={() => setShow(!show)}>{show ? <ExpandLessIcon/> : <ExpandMoreIcon/>}</IconButton>
              {show ? <p className="movie-summary" style={summaryStyles}>{summary} <p className="movie-starcast" style={summaryStyles}>{starCast} </p></p> : " "}
            </h4>
            <h5 style={styles} className="movie-rating">⭐ {rating} </h5>
          </div>
        </CardContent>
        <CardActions>
          <Counter />
         
        </CardActions>
      </Card>

    </div>
  );
}
