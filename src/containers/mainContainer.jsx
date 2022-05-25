import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, AppBar, Toolbar, Typography, Button, TextField, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { setLogin } from '../features/appSlice';
import SearchedShows from './SearchedShows';
import ShowCard from './savedShowCard';
import SearchCard from './searchCard';
import utilFuncs from '../funcs';

function Main(props) {
  const dispatch = useDispatch();
  // check that the user is legit
  const loggedIn = useSelector((store) => store.app.loggedIn);
  const userId = useSelector((store) => store.app.loggedIn);
  // useEffect on initial load, get users already starred shows to store in state
  // dispatch(setLogin(true));
  const [username, setUsername] = useState('Charles_Entertainment_Chz');
  const [showTitle, setShowTitle] = useState('');
  const handleTitleChange = ((e) => setShowTitle(e.target.value));
  const [searchSubmit, setSearchSubmit] = useState(false);
  const [searchResult, setSearchResult] = useState({});
  const [myShows, setMyShows] = useState([]);
  const [mySearch, setMySearch] = useState([]);
  const handleSearchSubmit = () => {
    //call the get function
    utilFuncs.getResults(showTitle, setSearchResult);
    setSearchSubmit(true);
  };

  // for search result display
  useEffect(() => {
    if (loggedIn && Object.keys(searchResult).length) {
      const tempShows = [];
      searchResult.results.forEach((res) => {
        tempShows.push(<SearchCard show={res} />);
      });
      setMySearch(tempShows);
    }
  }, [loggedIn, searchResult]);

  // for already faved shows
  // useEffect(() => {
  //   if (loggedIn) {
  //     const tempShows = [];
  //     // const response = fetch(`http://localhost:3000/api/shows/getFavorites/${userId}`);
  //     const shows = JSON.parse(response);
  //     shows.forEach((res) => {
  //       tempShows.push(<ShowCard props={res} />);
  //     });
  //     setMyShows(tempShows);
  //   }
  // }, [loggedIn]);

  return (
    <div>
      <div className="searchBar">
        <Box>
          <AppBar position="static">
            <Toolbar>
              <Typography color="secondary" variant="h5" component="div" sx={{ flexGrow: 1, ml: 16 }}>
                upNext
              </Typography>
              <Button variant="outlined" color="inherit">{username}</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Box sx={ { display: 'flex', m: 1, pt: 3, justifyContent: 'center' } }>
          <TextField 
            id="outlined-basic" 
            label="Search for shows"
            variant="outlined" 
            value={showTitle}
            onChange={handleTitleChange} 
          />
          <Button variant="contained" color="secondary" onClick={handleSearchSubmit}>LEts_Fucking_GO00o0o0000o!</Button>
        </Box>
        {searchSubmit && <SearchedShows searchResult={searchResult}/>}
      </div>
      <div className="myShows">
        <Grid container direction="row" justifyContent="center alignItems="center>
          {mySearch}
        </Grid>
      </div>
    </div>
  )
}

export default Main;
//appbar

//search bar component
//fav container
//calendar