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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';

import { useDispatch, useSelector } from 'react-redux';

import { removeFav } from './../funcs';

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
  const userId = useSelector((store) => store.app.userId);
  const [expanded, setExpanded] = React.useState(false);
  const { id, name, tagline, last_air_date, next_episode_to_air,
    in_production, episode_run_time, poster_path, overview } = props.show;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid>
      <Card variant="outlined" sx={{ maxWidth: '150px' }}>
        <CardHeader 
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          sx={{ height: '100px' }}
          title={name}
          subheader={tagline}
        />
        <CardMedia
          component="img"
          height="250"
          image={`https://www.themoviedb.org/t/p/w1280/${poster_path}`}
          alt={name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">Last Air Date: {last_air_date} </Typography>
          <Typography variant="body2" color="text.secondary">Next Air Date: {next_episode_to_air}</Typography>
          <Typography variant="body2" color="text.secondary">In production: {in_production}</Typography>
          <Typography variant="body2" color="text.secondary">Episode length: {episode_run_time} minutes</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="breakup with show" onClick={() => { removeFav(id, userId); }} sx={{ color: 'lightGreen' }}>
            <HeartBrokenIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {overview}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}
