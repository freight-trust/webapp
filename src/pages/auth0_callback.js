import React, {useEffect} from 'react';

import {useAuth} from 'react-use-auth';
/* eslint-disable */
const Auth0CallbackPage = () => {
  const {handleAuthentication} = useAuth();
  useEffect(() => {
    handleAuthentication();
  }, [handleAuthentication]);

  return <div />;
};

export default Auth0CallbackPage;
