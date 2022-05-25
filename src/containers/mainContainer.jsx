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

  const loggedIn = useSelector((store) => store.app.loggedIn);
  const userId = useSelector((store) => store.app.userId);

  const [searchString, setSearchString] = useState('');
  const handleTitleChange = ((e) => setSearchString(e.target.value));
  const [searchSubmit, setSearchSubmit] = useState(false);

  const handleSearchSubmit = async () => {
    const searchResults = await getResults(searchString);
    dispatch(saveSearchResults(searchResults));
    setSearchSubmit(true);
  };

  return (
    <div>
      <div className="searchBar">
        <Box>
          <AppBar position="static">
            <Toolbar>
              <Typography color="secondary" variant="h5" component="div" sx={{ flexGrow: 1, ml: 16 }}>
                upNext
              </Typography>
              <Button variant="outlined" color="inherit">{loggedIn}</Button>
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
      <div className="searchedShows">
        <SearchedShowsModal searchSubmit={searchSubmit} setSearchSubmit={setSearchSubmit}/>
      </div>
    </div>
  );
}

export default Main;
