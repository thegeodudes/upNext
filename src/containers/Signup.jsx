import React, {useState} from 'react';
import { Typography, TextField, Grid, Paper, Button, AppBar, SvgIcon, Box } from '@mui/material';

function Signup(props) {
  const paperStyle = {padding: 30, height: '45vh auto', width:300, margin: '10px auto', opacity: 0.85}
  
  const goToSignup = () => {
    props.setTrySignup(false);
  }
  return(
    <div className='signup'>
    <Grid sx={{ m: 2}}>
      <Paper align= 'left' elevation= {10} style= {paperStyle}>
        <Grid align= 'center'>
          <h3>Sign Up</h3>
        </Grid>
        <TextField label='Username' placeholder='Create Username' fullwidth="true"
          id="createUser"
          value={props.username}
          sx={{ m: 2, width: '25ch' }}
          onChange={props.handleUsernameChange}
        />
        <TextField label='Password' placeholder='Create Password' fullwidth="true"
        type="password"
        autoComplete="current-password"
        id="createPass"
        value={props.password}
        sx={{ m: 2, width: '25ch' }}
        onChange={props.handlePasswordChange}
        />
        <h4></h4>
        <Box sx={{ m: 2}}>
        <Button variant="contained" onClick= {props.handleSignupSubmit} >Create</Button>
        <Button sx={{ m: 1}} variant="outlined" onClick= {goToSignup} >Cancel</Button>
        {props.signupError && <Typography>Sign up could not be completed. Please try again!</Typography>}
        </Box>
      </Paper>
    </Grid>
    </div>
  )
}

export default Signup;
