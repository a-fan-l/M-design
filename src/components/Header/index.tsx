import * as React from 'react';
import { styled, Box, BoxProps } from '@mui/material';

import Logo, { IIndexProps as LogoProps } from './Logo';

export interface IIndexProps extends BoxProps {
  children?: React.ReactNode;
  isLogo?: boolean;
  logo?: LogoProps;
}

export const Container = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  alignContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  boxSizing: 'border-box',
}));

export const Content = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  alignContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  boxSizing: 'border-box',
}));

const Index: React.FC<IIndexProps> = ({ children, isLogo, logo, className, ...props }) => {
  return (
    <Container className="header-root">
      <Content className={`header-content ${className}`} {...props}>
        {isLogo && <Logo {...logo} />}
        {children ?? null}
      </Content>
    </Container>
  );
};

export default Index;
