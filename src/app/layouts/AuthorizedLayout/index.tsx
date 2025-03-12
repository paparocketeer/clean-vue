import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import React, { FC, ReactNode } from 'react';

import { Header, Info, Sidebar } from './components';

interface IAuthorizedLayoutProps {
  children: ReactNode;
}

export const AuthorizedLayout: FC<IAuthorizedLayoutProps> = ({ children }) => {
  return (
    <Main>
      <Header />
      <Info />
      <Wrapper>
        <Sidebar />
        <Content>{children}</Content>
      </Wrapper>
    </Main>
  );
};

const Main = styled(Box)`
  background-color: #b5d4ff;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 4px;
  overflow: visible;
  height: 100vh;
`;

const Wrapper = styled(Box)`
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const Content = styled(Box)`
  display: flex;
  width: 100%;
  position: relative;
  background: #e7f1ff;
  border-radius: 15px;
  overflow: hidden;
`;
