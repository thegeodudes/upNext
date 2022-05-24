import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SearchedShows = () => {
  const searchResults = useSelector((store) => store.app.searchResults);
  return (
    <div>
      <h1>this is the shows</h1>
    </div>
  )
}

export default SearchedShows;
