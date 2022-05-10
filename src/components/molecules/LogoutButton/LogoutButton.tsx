import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { useAppDispatch } from 'src/config/store';
import { setUser } from 'src/store/common/common.slice';
import { MenuItem, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'src/config/constants';

interface Props {
  handleClose: () => void;
  loggedInWith: string;
}

const LogoutButton: React.FC<Props> = ({ handleClose, loggedInWith }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onLogoutSuccess = () => {
    handleClose();
    dispatch(setUser(null));
    localStorage.removeItem('userId');
    navigate(AppRoutes.LOGIN);
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const googleSignOut = useGoogleLogout({
    clientId: process.env.REACT_APP_GOOGLE_ID as string,
    onLogoutSuccess,
    onFailure
  });

  const facebookSignOut = () => {
    window.FB.api('/me/permissions', 'delete', null, () => window.FB.logout());
    onLogoutSuccess();
  };

  const handleLogOut = () => {
    switch (loggedInWith) {
      case 'facebook':
        facebookSignOut();
        break;
      case 'google':
        googleSignOut.signOut();
        break;
      default:
        break;
    }
  };

  return (
    <MenuItem onClick={handleLogOut}>
      <Typography textAlign="center">Logout</Typography>
    </MenuItem>
  );
};

export default LogoutButton;
