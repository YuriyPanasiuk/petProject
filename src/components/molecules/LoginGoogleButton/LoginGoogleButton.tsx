import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { GoogleLoginResponse, GoogleLoginResponseOffline, GoogleLogin } from 'react-google-login';
import { useAppDispatch } from 'src/config/store';
import { setUser } from 'src/store/common/common.slice';
import { AppRoutes } from 'src/config/constants';

const clientId = process.env.REACT_APP_GOOGLE_ID as string;

const LoginGoogleButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const { profileObj } = res as GoogleLoginResponse;
    const { googleId, name, imageUrl } = profileObj;

    const googleUser = {
      id: googleId,
      name,
      imageUrl,
      loggedInWith: 'google'
    };

    dispatch(setUser(googleUser));
    localStorage.setItem('userId', googleId);
    navigate(AppRoutes.HOME);
  };

  const onFailure = (res: GoogleLoginResponse) => {
    console.log('Login failed: res:', res);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      render={(renderProps) => (
        <Button onClick={renderProps.onClick} variant="contained" startIcon={<GoogleIcon />}>
          Sign in with Google
        </Button>
      )}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default LoginGoogleButton;
