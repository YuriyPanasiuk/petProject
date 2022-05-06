import React from 'react';
import { Card, CardContent, Typography, CardActions } from '@mui/material';
import { LoginGoogleButton } from 'src/components/molecules';
import { StyledContainer } from './LoginPage.styles';

const LoginPage = () => {
  return (
    <StyledContainer>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Welcome
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Please sign in to continue
          </Typography>
        </CardContent>
        <CardActions>
          <LoginGoogleButton />
        </CardActions>
      </Card>
    </StyledContainer>
  );
};

export default LoginPage;
