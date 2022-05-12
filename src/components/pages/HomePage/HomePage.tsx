import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from 'src/store/common/common.selector';
import { StyledContainer } from './HomePage.styles';
import ChatIcon from '@mui/icons-material/Chat';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { AppRoutes } from 'src/config/constants';

const HomePage = () => {
  const user = useSelector(getUser);

  return (
    <StyledContainer>
      <Card sx={{ maxWidth: 400 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {`Welcome ${user?.name}!`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Please choose pages
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={AppRoutes.CHAT}>
            <Button variant="contained" endIcon={<ChatIcon />}>
              Go to Chat
            </Button>
          </Link>
          <Link to={AppRoutes.TODO_LIST}>
            <Button variant="contained" endIcon={<PlaylistAddCheckIcon />}>
              Go to Todo List
            </Button>
          </Link>
        </CardActions>
      </Card>
    </StyledContainer>
  );
};

export default HomePage;
