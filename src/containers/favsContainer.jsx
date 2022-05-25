import React, { useState, useEffect } from 'react';
import { Box, AppBar, Toolbar, Typography, Button, TextField, Grid } from '@mui/material';
import { getResults, getFavorites } from '../funcs';
import { useDispatch, useSelector } from 'react-redux';
import { saveFavoriteShows } from './../features/appSlice';
import ShowCard from './savedShowCard';
import FavCalendar from './FavCalendar';

const style = {
  // position: 'absolute',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
  // width: '75%',
  // bgcolor: 'background.paper',
  // border: '2px solid #000',
  // boxShadow: 24,
  // pt: 2,
  // px: 4,
  // pb: 3,
};

function FavsContainer(props) {
  const dispatch = useDispatch();
  const loggedIn = useSelector((store) => store.app.loggedIn);
  const userId = useSelector((store) => store.app.userId);

  const [myShows, setMyShows] = useState([]);

  // useEffect(() => {
  //   // setRefresh(refresh + 1);
  //   // console.log('search changed', refresh)
  //   setInterval(setRefresh(refresh + 1), 500);
  // }, []);

  useEffect(() => {
    const getFaves = async () => {
      console.log('loggedin', loggedIn);
      if (loggedIn) {
        console.log('redrawing')
        const tempShows = [];
        const shows = await getFavorites(userId);
        dispatch(saveFavoriteShows(shows));
        console.log('shows', shows);
        shows.forEach((show) => {
          tempShows.push(<Grid><ShowCard show={show} /></Grid>);
        });
        setMyShows(tempShows);
      }
    };
    getFaves();
  }, [props.refresh, props.searchSubmit]);

  return (
    <div>
      <Grid container direction="column" display="flex" justifyContent="center" alignItems="center" >
        <Grid container direction="row" display="flex" justifyContent="center" alignItems="center" sx={{ ...style }}>
          {myShows}
        </Grid>
        <Grid>
          <FavCalendar />
        </Grid>
      </Grid>
    </div>
  )
}

export default FavsContainer;
