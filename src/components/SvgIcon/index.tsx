import React, { useMemo } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import icons, { IconNameType } from './icons';

export interface IIndexProps extends SvgIconProps {
  name?: IconNameType;
}

const Index: React.FC<IIndexProps> = ({ name, className, component, sx, ...props }) => {
  const c = useMemo(() => {
    if (component) {
      return { component: component as React.ElementType };
    }
    if (name) {
      return { component: icons[name]?.component };
    }
    return {};
  }, [name, component]);

  const p = useMemo(() => {
    const op = { ...props };
    if (name) {
      return { ...icons[name]?.props, ...op };
    }
    return op;
  }, [name, props]);

  return (
    <SvgIcon
      fill="none"
      {...c}
      className={`design-svg ${className}`}
      sx={{
        fill: 'transparent',
        ...sx,
      }}
      {...p}
    />
  );
};

export default Index;
