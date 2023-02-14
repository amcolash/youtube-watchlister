import { Button } from '@mui/material';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import * as React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { app } from './firebase';

export default () => {
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);

  const provider = new GoogleAuthProvider();

  return (
    <>
      <h1>Welcome to React Parcel Micro App!</h1>
      <p>Hard to get more minimal than this React app.</p>

      {loading ? (
        'Loading'
      ) : user ? (
        <Button onClick={() => signOut(auth)}>Logout</Button>
      ) : (
        <Button onClick={() => signInWithPopup(auth, provider)}>Login</Button>
      )}
    </>
  );
};
