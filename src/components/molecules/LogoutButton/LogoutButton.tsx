import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { useAppDispatch } from 'src/config/store';
import { setUser } from 'src/store/common/common.slice';
import { MenuItem, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'src/config/constants';

const clientId = process.env.REACT_APP_GOOGLE_ID as string;

interface Props {
  handleClose: () => void;
}

const LogoutButton: React.FC<Props> = ({ handleClose }) => {
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

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure
  });

  return (
    <MenuItem onClick={signOut}>
      <Typography textAlign="center">Logout</Typography>
    </MenuItem>
  );
};

export default LogoutButton;
