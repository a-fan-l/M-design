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

const Index: React.FC<IIndexProps> = ({ className, children, slotProps, ...props }) => (
  <Popover
    disablePortal
    slotProps={{
      ...slotProps,
      paper: {
        className: `header-item-modal ${className}`,
        ...slotProps?.paper,
      },
    }}
    {...props}
  >
    {children ?? null}
  </Popover>
);

export default Index;
