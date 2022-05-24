import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, AppBar, Toolbar, Typography, Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { setLogin } from '../features/appSlice';
import SearchedShows from './SearchedShows';

function Main(props) {
  const dispatch = useDispatch();
  // check that the user is legit
  const loggedIn = useSelector((store) => store.app.loggedIn);
  // useEffect on initial load, get users already starred shows to store in state
  // dispatch(setLogin(true));
  const [username, setUsername] = useState('Charles_Entertainment_Chz');
  const [showTitle, setShowTitle] = useState('');
  const handleTitleChange = ((e) => setShowTitle(e.target.value));
  const [resultsSearch, setResultsSearch] = useState(false);
  const handleSearchSubmit = () => {
    setResultsSearch(true);
  }

  return (
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
      <Box sx={{ display: 'flex', m: 1, pt: 3, justifyContent: 'center'}}>
        <TextField 
        id="outlined-basic" 
        label="Search for shows"
        variant="outlined" 
        value={showTitle}
        onChange={handleTitleChange} 
        />
        <Button variant="contained" color="secondary" onClick={handleSearchSubmit}>LEts_Fucking_GO00o0o0000o!</Button>
      </Box>
      {resultsSearch && <SearchedShows />}
    </div>
  )
}

export default Main;
//appbar

//search bar component
//fav container
//calendar