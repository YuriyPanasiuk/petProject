import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useAppDispatch } from 'src/config/store';
import { setUser } from 'src/store/common/common.slice';
import { AppRoutes } from 'src/config/constants';
import { ReactFacebookLoginInfo } from 'react-facebook-login';

const LoginFacebookButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const responseFacebook = (response: ReactFacebookLoginInfo) => {
    const { userID, name, picture } = response;

    if (response.accessToken) {
      const facebookUser = {
        id: userID,
        name,
        imageUrl: picture?.data.url || null,
        loggedInWith: 'facebook'
      };
      dispatch(setUser(facebookUser));
      localStorage.setItem('userId', userID);
      navigate(AppRoutes.HOME);
    }
  };

  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FACEBOOK_ID as string}
      autoLoad={false}
      fields="name,email,picture"
      scope="public_profile"
      callback={responseFacebook}
      render={(renderProps) => (
        <Button onClick={renderProps.onClick} variant="contained" startIcon={<FacebookIcon />}>
          Sign in with Facebook
        </Button>
      )}
    />
  );
};

export default LoginFacebookButton;
