import * as React from 'react';
import { Header } from '../organisms';
import { HTMLAttributes } from 'react';
import { Container } from '../atoms';

const Layout: React.FC<HTMLAttributes<HTMLElement>> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
};

export default Layout;
