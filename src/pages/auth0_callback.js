import React, { useEffect } from 'react'

import { useAuth } from 'react-use-auth'

const Auth0CallbackPage = () => {
  const { handleAuthentication } = useAuth()
  useEffect(() => {
    handleAuthentication()
  }, [handleAuthentication])

  return (
    <h1>
      This is the auth callback page, you should be redirected immediately.
    </h1>
  )
}

export default Auth0CallbackPage
