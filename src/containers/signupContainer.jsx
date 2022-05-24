import React, {useState} from 'react';

const Signup = (props) => {
  const [ createUser, setCreateUser ] = useState(false);
  const [ cancel, setCancel ] = useState(false);

  const handleCreateUser = () => {
    handleSignupClick();
    setCreateUser(true);
  };

  const handleCancel = () => {
    setCancel(true);
  };
};

export default Signup;
