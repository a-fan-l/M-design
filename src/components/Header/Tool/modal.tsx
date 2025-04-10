import * as React from 'react';
import { Box, PopoverProps, styled, Popover } from '@mui/material';

export interface IIndexProps extends PopoverProps {
  children?: React.ReactNode;
}

export const Container = styled(Box)(() => ({
  position: 'absolute',
  zIndex: 9999,
  top: '100%',
}));

const Index: React.FC<IIndexProps> = ({ className, children, ...props }) => (
  <Popover disablePortal className={`header-modal header-tools-modal ${className}`} {...props}>
    {children ?? null}
  </Popover>
);

export default Index;
