import React, {useCallback, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Paper, Typography, Box, Grid} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import utilFuncs from '../funcs';
import { setUserId, setLogin } from '../features/appSlice';
import Signup from './Signup';
import Login from './Login';

function Lobby(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [username, setUsername] = useState('');
  // const handleUsernameChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setUsername(value);
  // };

  const [password, setPassword] = useState('');
  const handlePasswordChange = (event) => {
    const {
      target: { value },
    } = event;
    setPassword(value);
  };
  const [signupSubmit, setSignupSubmit] = useState(false);
  // check that the user is legit
  const loggedIn = useSelector((store) => store.app.loggedIn);
  const userId = useSelector((store) => store.app.loggedIn);
  // dispatch(setLogin(true));
  const [loginForDispatch, setLoginForDispatch] = useState(false);
  const [userIdForDispatch, setUserIdForDispatch] = useState(0);
  const [ loginError, setLoginError ] = useState(false);
  const [ signupError, setSignupError ] = useState(false);
  const [ tryLogin, setTryLogin ] = useState(false);
  const handleTryLogin = () => {
    setTrySignup(false);
    setTryLogin(true);
  }
  const [ trySignup, setTrySignup ] = useState(false);
  const handleTrySignup = () => {
    setTryLogin(false);
    setTrySignup(true);
  }
  const handleLoginSubmit = () => {
    utilFuncs.login(props.username, password, setLoginForDispatch, setUserIdForDispatch, setLoginError)
    dispatch(setLogin(loginForDispatch));
    dispatch(setUserId(userIdForDispatch));
    if (props.username && !loginError) {
     // setLoginSubmit(true);
      navigate('/home', {replace: true}), [navigate]
    } else {
      setLoginError(true);
    }
  };
  const handleSignupSubmit = () => {
    utilFuncs.signup(props.username, password, setLoginForDispatch, setUserIdForDispatch, setSignupError);
    dispatch(setLogin(loginForDispatch));
    dispatch(setUserId(userIdForDispatch));
   if(props.username && !signupError) {
     navigate('/home', {replace: true}) , [navigate]
   } else {
     setSignupError(true);
   }
  }
  const paperStyle = {padding: 30, height: '45vh auto', width:700, margin: '10px auto', opacity: 0.85}
  return (
    <div className="upNext">
      <Grid align='center' sx={{ m: 2}}>
        <Paper align= 'center' elevation= {10} style= {paperStyle}>
        <Typography variant="h3">Welcome to upNext!</Typography>
        <Typography variant="h5">Log in or Sign up to get started.</Typography>
      <h4></h4>
      <Box >
      {!tryLogin && <Box>
        <Button variant="contained" onClick={handleTryLogin}>Log In</Button>
        <h4></h4>
      </Box>
      }
      {!trySignup && <Box >
      <Typography>Don't Have an Account?</Typography>
      <h4></h4>
      <Button variant="outlined" onClick={handleTrySignup}>Sign Up</Button>
      </Box>
      }
      </Box>
      </Paper>
      </Grid>
      {tryLogin && <Login 
      username={props.username} 
      password={password} 
      handleUsernameChange={props.handleUsernameChange}
      handlePasswordChange={handlePasswordChange}
      handleLoginSubmit={handleLoginSubmit}
      loginError={loginError}
      handleTrySignup={handleTrySignup}
      />
      }
      {trySignup && <Signup 
       username={props.username} 
       password={password} 
       handleUsernameChange={props.handleUsernameChange}
       handlePasswordChange={handlePasswordChange}
       handleSignupSubmit={handleSignupSubmit}
       setTrySignup={setTrySignup}
       signupError={signupError}
      />}
    </div>
  )
};

export default Lobby;