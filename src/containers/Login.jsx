import React, {useState} from 'react';
import { Typography, TextField, Grid, Paper, Button, AppBar, Box} from '@mui/material';

function Login(props) {
  const paperStyle = {padding: 30, height: '45vh auto', width:300, margin: '10px auto', opacity: 0.85}
  return (
    <div className= 'lobbyPage'>
      <Grid>
        <Paper align= 'left' elevation= {10} style= {paperStyle}>
          <Grid align= 'center'>
            <h3>Log In</h3>
          </Grid>
          <TextField label='Username' placeholder='Enter username' fullwidth='true' 
            id="enterUsername"
            value={props.username}
            sx={{ m: 1, width: '25ch' }}
            onChange={props.handleUsernameChange}
          />
          <TextField label='Password' placeholder='Enter password' fullwidth='true' 
          id="enterPassword"
          type="password"
          autoComplete="current-password"
          sx={{ m: 1, width: '25ch' }}
          value={props.password}
          onChange={props.handlePasswordChange}
          />
          <h4></h4>
          <Box sx={{ m: 2}}>
          <Button variant="contained" align= 'center' onClick={props.handleLoginSubmit}>Log In</Button>
          <Button sx={{ m: 1}} variant="outlined" align= 'center' onClick={props.handleTrySignup}>Sign Up</Button>
          {props.loginError && <Typography>Username or password was incorrect. Try again!</Typography>}
          </Box>
        </Paper>
      </Grid>
    </div>
  )
}

export default Login;
