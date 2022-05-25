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
import { lightGreen } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';

const props = {
  id: 52814,
  name: 'Halo',
  last_air_date: "2022-05-19",
  next_episode_to_air: null,
  in_production: true,
  episode_run_time: 60,
  poster_path: "/eO0QV5qJaEngP1Ax9w3eV6bJG2f.jpg",
  overview: "Depicting an epic 26th-century conflict between humanity and an alien threat known as the Covenant, the series weaves deeply drawn personal stories with action, adventure and a richly imagined vision of the future.",
  tagline: "Find the Halo, win the war.",
};

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

export default function ShowCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid>
      <Card variant="outlined" sx={{ maxWidth: 345 }}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.name}
          subheader="Find the Halo, win the war."
        />
        <CardMedia
          component="img"
          height="350"
          image={`https://www.themoviedb.org/t/p/w1280/${props.poster_path}`}
          alt={props.name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">Last Air Date: {props.last_air_date} </Typography>
          <Typography variant="body2" color="text.secondary">Next Air Date: {props.next_episode_to_air}</Typography>
          <Typography variant="body2" color="text.secondary">In production: {props.in_production}</Typography>
          <Typography variant="body2" color="text.secondary">Episode length: {props.episode_run_time}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="breakup with show" sx={{ color: "lightGreen" }}>
            <HeartBrokenIcon/>
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
            {props.overview}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}
