import React, { useState, useEffect } from 'react';
import Main from './containers/mainContainer';

function App() {
  const [user, setUser] = useState('');
  const handleUserCreate = (event) => {
    const {
      target: { value },
    } = event;
    setUser(value);
  };

  const [pass, setPass] = useState('');
  const handlePassCreate = (event) => {
    const {
      target: { value },
    } = event;
    setPass(value);
  };

  const [username, setUsername] = useState('');
  const handleUsernameChange = (event) => {
    const {
      target: { value },
    } = event;
    setUsername(value);
  };

  const [password, setPassword] = useState('');
  const handlePasswordChange = (event) => {
    const {
      target: { value },
    } = event;
    setPassword(value);
  };

  return (
    <main>
      <Main />
    </main>
  );
}

export default App;
