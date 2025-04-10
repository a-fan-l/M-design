import React from 'react';
import { IconButton, BoxProps, Box, IconButtonProps } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DehazeIcon from '@mui/icons-material/Dehaze';

interface IIndexProps extends IconButtonProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: BoxProps['className'];
  open?: boolean;
}

const Index: React.FC<IIndexProps> = ({ children, icon, className, open, ...props }) => {
  return (
    <Box className={`header-menu-button-root ${className}`}>
      <IconButton sx={{ cursor: 'pointer' }} {...props}>
        {icon ? (
          icon
        ) : open ? (
          <CloseIcon className="menu-switch menu-close" />
        ) : (
          <DehazeIcon className="menu-switch menu-open"></DehazeIcon>
        )}
      </IconButton>
      {children ?? null}
    </Box>
  );
};

export default Index;
