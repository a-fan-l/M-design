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

  '& .header-tools-modal': {
    position: 'absolute',
    zIndex: 9999,
    top: '100%',
  },

  '& .tools-ul-li': {
    width: '100%',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    boxSizing: 'border-box',
    position: 'relative',
    cursor: 'pointer',
    padding: '0 10px',
  },
}));

const Index: React.FC<IIndexProps> = ({ className, children, ...props }) => (
  <Container className={`header-tools-item ${className}`} {...props}>
    {children ?? null}
  </Container>
);

export default Index;
