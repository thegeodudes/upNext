import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, AppBar, Toolbar, Typography, Button, TextField } from '@mui/material';
import SearchedShowsModal from './searchedShowsModal';
import FavsContainer from './favsContainer';
import { getResults } from '../funcs';
import { saveSearchResults, setRefresh } from './../features/appSlice'

function Main(props) {
  const dispatch = useDispatch();

  const loggedIn = useSelector((store) => store.app.loggedIn);

  const [searchString, setSearchString] = useState('');
  const handleTitleChange = ((e) => setSearchString(e.target.value));
  const [searchSubmit, setSearchSubmit] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const handleSearchSubmit = async () => {
    const searchResults = await getResults(searchString);
    dispatch(saveSearchResults(searchResults));
    setSearchSubmit(true);
  };

  const handleRefresh = () => {
    setRefresh(refresh + 1);
  };

  // useEffect(() => {
  //   // setRefresh(refresh + 1);
  //   // console.log('search changed', refresh)
  //   setInterval(setRefresh(refresh + 1), 1000);
  // }, []);

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
          <Button variant="contained" color="secondary" onClick={handleRefresh}>Refresh</Button>
        </Box>
        <FavsContainer searchSubmit={searchSubmit} refresh={refresh}/>
      </div>
      <div className="searchedShows">
        <SearchedShowsModal searchSubmit={searchSubmit} setSearchSubmit={setSearchSubmit} refresh={refresh}/>
      </div>
    </div>
  );
}

export default Main;
