import React from 'react';
import { Header } from '../organisms';
import { HTMLAttributes } from 'react';
import { Container } from '../atoms';
import { Outlet } from 'react-router-dom';

const Layout: React.FC<HTMLAttributes<HTMLElement>> = () => (
  <>
    <Header />
    <main>
      <Container>
        <Outlet />
      </Container>
    </main>
  </>
);

export default Layout;
