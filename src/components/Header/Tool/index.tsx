import * as React from 'react';
import { Box, BoxProps, styled } from '@mui/material';

export interface IIndexProps extends BoxProps {
  children?: React.ReactNode;
}

export const Container = styled(Box)(() => ({
  display: 'flex',
  alignContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  boxSizing: 'border-box',
  position: 'relative',
}));

const Index: React.FC<IIndexProps> = ({ className, children, ...props }) => (
  <Container className={`tool tool-root ${className}`} {...props}>
    {children ?? null}
  </Container>
);

export default Index;
