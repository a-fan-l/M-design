import * as React from 'react';
import { BoxProps } from '@mui/material';

interface IIndexProps {
  className?: BoxProps['className'];
  children?: React.ReactNode;
}

const Index: React.FunctionComponent<IIndexProps> = ({ children, className }) => {
  return <ul className={`header-ul header-menu-ul ${className}`}>{children ?? null}</ul>;
};

export default Index;
