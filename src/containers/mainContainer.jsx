import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, AppBar, Toolbar, Typography, Button, TextField, Grid } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
import SearchedShowsModal from './searchedShowsModal';
// import FavCalendar from './FavCalendar';
// import ShowCard from './savedShowCard';
// import SearchCard from './searchCard';
import FavsContainer from './favsContainer';
import { getResults, getFavorites } from '../funcs';
import { setLogin, saveSearchResults } from './../features/appSlice'

function Main(props) {
  const dispatch = useDispatch();
  // check that the user is legit
  const loggedIn = useSelector((store) => store.app.loggedIn);
  const userId = useSelector((store) => store.app.userId);
  // useEffect on initial load, get users already starred shows to store in state
  // dispatch(setLogin(true));
  const [username, setUsername] = useState('Charles_Entertainment_Chz');
  const [searchString, setSearchString] = useState('');
  const handleTitleChange = ((e) => setSearchString(e.target.value));
  const [searchSubmit, setSearchSubmit] = useState(false);
  const [searchResult, setSearchResult] = useState({});
  const [myShows, setMyShows] = useState([]);
  const [mySearch, setMySearch] = useState([]);

  const handleSearchSubmit = async () => {
    const searchResults = await getResults(searchString);
    dispatch(saveSearchResults(searchResults));
    setSearchSubmit(true);
  };

  // for search result display
  // useEffect(() => {
  //   if (loggedIn && Object.keys(searchResult).length) {
  //     const tempShows = [];
  //     searchResult.results.forEach((res) => {
  //       tempShows.push(<SearchCard show={res} />);
  //     });
  //     setMySearch(tempShows);
  //   }
  // }, [loggedIn, searchResult]);

  // for already faved shows


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
            value={searchString}
            onChange={handleTitleChange} 
          />
          <Button variant="contained" color="secondary" onClick={handleSearchSubmit}>Search</Button>
        </Box>
        <FavsContainer />
      </div>
      <div className="myShows">
        <Grid container direction="row" justifyContent="center alignItems=">
          {mySearch}
        </Grid>
      </div>
      <SearchedShowsModal searchSubmit={searchSubmit} />
    </div>
  )
}

export default Main;
//appbar

//search bar component
//fav container
//calendar