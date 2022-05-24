import React, {useState} from 'react';

const Login = (props) => {
  const [ loginUser, setLogininUser ] = useState(false);
  
  const handleLoginUser = () => {
    handleLoginClick();
    setLoginUser(true);
  };
};

export default Login;
