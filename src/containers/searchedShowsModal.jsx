import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, Paper, Stack, Typography, Grid } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import SearchCard from './searchCard';

// modal opens on seach button click
// closes on click outside of modal or on show

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function SearchedShowsModal(props) {
  const searchResults = useSelector((store) => store.app.searchResults);
  const userId = useSelector((store) => store.app.userId);
  const [open, setOpen] = React.useState(false);
  const [shows, setShows] = React.useState([]);

  const handleClose = (event, reason) => {
    if (reason === 'backdropClick') {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (props.searchSubmit) {
      console.log('what is', searchResults);
      const showList = searchResults.results.map((show) => <Grid><SearchCard show={show} userId={userId} setOpen={setOpen} setSearchSubmit={props.setSearchSubmit} /></Grid>);
      setShows(showList.slice(0, 5));
      setOpen(true);
    }
  }, [props.searchSubmit]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid container direction="row" display="flex" justifyContent="center" alignItems="center" sx={{ ...style }}>
        {shows}
      </Grid>
    </Modal>

  )
}

export default SearchedShowsModal;
