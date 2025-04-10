import React, { useMemo } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

import icons, { IconNameType } from './icons';

export interface IIndexProps extends SvgIconProps {
  name?: IconNameType;
}

const Index: React.FC<IIndexProps> = ({ name, className, component, sx, ...props }) => {
  const _component = useMemo(() => {
    if (component) {
      return { component: component as React.ElementType };
    }
    if (name) {
      return { component: icons[name]?.component };
    }
    return {};
  }, [name, component]);

  const _props = useMemo(() => {
    const op = { ...props };
    if (name) {
      return { ...icons[name]?.props, ...op };
    }
    return op;
  }, [name, props]);

  return (
    <SvgIcon
      fill="none"
      {..._component}
      className={`design-svg ${className}`}
      sx={{
        fill: 'transparent',
        ...sx,
      }}
      {..._props}
    />
  );
};

export default Index;
