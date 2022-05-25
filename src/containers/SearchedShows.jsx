import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, Paper, Stack, Typography } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const SearchedShows = (props) => {
  const searchResults = useSelector((store) => store.app.searchResults);
  //props.searchResult is the array of objs?
console.log(props.searchResult);
  // let FavIcon;
  // if (fav) FavIcon = (<span className="favIcon"><FAIcon onClick={() => props.favClicked(id)} icon={solidStar} style={{ color: 'rgb(150, 177, 147)' }} /></span>);
  // else FavIcon = (<span className="favIcon"><FAIcon onClick={() => props.favClicked(id)} icon={regStar} /></span>);

  return (
    <div>
      <Stack direction= "row" spacing={2}>
        {/* {props.searchResult.map((result) => (
          <Paper>hello</Paper>
        ))} */}
      </Stack>
    </div>
  )
}

export default SearchedShows;
