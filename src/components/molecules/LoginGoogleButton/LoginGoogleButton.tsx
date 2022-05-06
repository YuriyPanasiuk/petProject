import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import {
  useGoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline
} from 'react-google-login';
import { useAppDispatch } from 'src/config/store';
import { setUser } from 'src/store/common/common.slice';
import { AppRoutes } from 'src/config/constants';

const clientId = process.env.REACT_APP_GOOGLE_ID as string;

const LoginGoogleButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const { profileObj } = res as GoogleLoginResponse;
    dispatch(setUser(profileObj));
    localStorage.setItem('userId', profileObj.googleId);
    navigate(AppRoutes.HOME);
  };

  const onFailure = (res: GoogleLoginResponse) => {
    console.log('Login failed: res:', res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline'
  });

  return (
    <Button onClick={signIn} variant="contained" startIcon={<GoogleIcon />}>
      Sign in with Google
    </Button>
  );
};

export default LoginGoogleButton;
