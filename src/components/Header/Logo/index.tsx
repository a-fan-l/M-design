import * as React from 'react';
import { Box, BoxProps } from '@mui/material';
import SvgIcon, { IIndexProps as SvgIconProps } from '@components/SvgIcon';

export interface IIndexProps extends SvgIconProps {
  containerprops?: BoxProps;
}

const Index: React.FC<IIndexProps> = ({ containerprops, ...props }) => {
  return (
    <Box {...containerprops} className={`header-logo ${containerprops?.className}`}>
      {containerprops?.children ?? (
        <SvgIcon {...props} className={`header-logo-svg ${props.className}`} />
      )}
    </Box>
  );
};

export default Index;
