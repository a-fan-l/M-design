import React from 'react';
import { IconButton, IconButtonProps } from '@mui/material';
import SvgIcon, { IIndexProps as SvgIconProps } from '@components/SvgIcon';
import { ThemeMode } from '@store/system';

export interface IIndexProps extends IconButtonProps {
  mode?: ThemeMode;
  order?: number;
  svgprops?: SvgIconProps;
}

const Index: React.FC<IIndexProps> = ({
  mode = 'light',
  order,
  svgprops,
  className,
  sx,
  ...props
}) => {
  return (
    <IconButton
      {...props}
      className={`header-tool-item  header-tool-mode mode-root ${className}`}
      sx={{
        order: order,
        ...sx,
      }}
    >
      <SvgIcon
        name={mode === 'dark' ? 'mode_dark' : 'mode_light'}
        mode={mode}
        {...svgprops}
      ></SvgIcon>
    </IconButton>
  );
};

export default Index;
