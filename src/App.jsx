import React, { useState, useEffect } from 'react';
import Main from './containers/mainContainer';
import Lobby from './containers/Lobby';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // const [user, setUser] = useState('');
  // const handleUserCreate = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setUser(value);
  // };

  // const [pass, setPass] = useState('');
  // const handlePassCreate = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setPass(value);
  // };

  const [username, setUsername] = useState('');
  const handleUsernameChange = (event) => {
    const {
      target: { value },
    } = event;
    setUsername(value);
  };

  // const [password, setPassword] = useState('');
  // const handlePasswordChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setPassword(value);
  // };

  return (
    <div className="main">
      {/* <Main /> */}
      <Routes>
        <Route path= "/home" 
          element=
          {<Main username={username}/>}
          />
        <Route path= "/"
          element=
          {<Lobby username={username} setUsername={setUsername} handleUsernameChange={handleUsernameChange}/>}
         />
      </Routes>
    </div>
  );
}

export default App;
