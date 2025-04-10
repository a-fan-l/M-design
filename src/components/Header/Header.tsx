import * as React from 'react';
import { styled, Box, BoxProps } from '@mui/material';

export interface IIndexProps extends BoxProps {
  children?: React.ReactNode;
}

export const Container = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  alignContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  boxSizing: 'border-box',
}));

const Index: React.FC<IIndexProps> = ({ children, className, ...props }) => {
  return (
    <Container {...props} className={`header-root ${className}`}>
      {children ?? null}
    </Container>
  );
};

export default Index;
