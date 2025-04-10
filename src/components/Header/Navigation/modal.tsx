import * as React from 'react';
import { Box, BoxProps, styled } from '@mui/material';

export interface IIndexProps extends BoxProps {
  children?: React.ReactNode;
}

export const Container = styled(Box)(() => ({
  position: 'absolute',
  zIndex: 9999,
  top: '100%',
}));

const Index: React.FC<IIndexProps> = ({ className, children, ...props }) => (
  <Container className={`header-modal header-menu-modal ${className}`} {...props}>
    {children ?? null}
  </Container>
);

export default Index;
