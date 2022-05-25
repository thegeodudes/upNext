import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { purple } from '@mui/material/colors';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ShowCard(props) {
  return (
    <Grid>
      <Card variant="outlined" sx={{ maxWidth: 345 }}>
        <CardHeader
          action={
            <IconButton aria-label="Add to faves" sx={{ color: "purple" }}>
              <AutoAwesomeIcon />
            </IconButton>
          }
          title={props.show.name}
          // subheader="Find the Halo, win the war."
        />
        <CardMedia
          component="img"
          height="350"
          image={`https://www.themoviedb.org/t/p/w1280/${props.show.poster_path}`}
          alt={props.name}
        />
      </Card>
    </Grid>
  );
}