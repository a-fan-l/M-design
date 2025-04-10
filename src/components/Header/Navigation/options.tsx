import React, { useMemo } from 'react';
import { BoxProps, ListItemIcon, ListItemText, useTheme } from '@mui/material';

export interface MRouterIcon {
  light: React.ReactNode;
  dark?: React.ReactNode;
}

export interface MRouterBase {
  id: string;
  text: string;
  href?: string;
  disable?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top';
  ismenu?: boolean;
  isarrow?: boolean;
  isicon?: boolean;
  icones?: MRouterIcon;
}

export type MRouter<T = {}> = MRouterBase & {
  children?: MRouter<T>[];
} & T;

export interface IIndexProps {
  data: MRouter;
  current?: MRouter;
  isactive?: boolean;
  className?: BoxProps['className'];
  getlink?: <T>(params?: MRouter) => React.FC<T>;
  children?: React.ReactNode;
}

const Index: React.FC<IIndexProps> = ({ data, getlink }) => {
  const theme = useTheme();

  const link = useMemo(() => {
    if (!data?.href) {
      return () => <>{data.text}</>;
    }
    if (getlink) {
      return getlink(data);
    }
    return () => (
      <a href={data.href} target={data.target}>
        {data.text}
      </a>
    );
  }, [data, getlink]);

  return (
    <>
      {data.isicon && data.icones && (
        <ListItemIcon className="menu-icon-container">
          {theme.palette.mode === 'dark'
            ? (data.icones?.dark ?? data.icones?.light)
            : data.icones?.light}
        </ListItemIcon>
      )}
      <ListItemText className="menu-text-container">{React.createElement(link)}</ListItemText>
    </>
  );
};

export default Index;
