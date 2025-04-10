import React from 'react';
import { Box, BoxProps } from '@mui/material';
import { ThemeMode } from '@store/system';
import Typography from '@components/Typography';

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

export interface MenuLiProps {
  data: MRouter;
  current?: MRouter;
  isprefix?: boolean;
  issuffix?: boolean;
  className?: BoxProps['className'];
  mode?: ThemeMode;
  suffix?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
}

const Index: React.FunctionComponent<MenuLiProps> = ({
  data,
  current,
  isprefix,
  issuffix,
  className,
  mode = 'light',
  suffix,
  children,
  onClick,
}) => {
  return (
    <li
      onClick={onClick}
      className={`header-li header-menu-li ${className} ${current?.id === data.id ? 'active' : 'idel'}`}
    >
      {isprefix && data.isicon && data?.icones && (
        <Box className="li-prefix-root">{data.icones[mode]}</Box>
      )}
      {children ?? (
        <Typography component={'span'} className="li-text ">
          {data.text}
        </Typography>
      )}
      {issuffix && suffix && <Box className="li-suffix-root">{suffix}</Box>}
    </li>
  );
};

export default Index;
