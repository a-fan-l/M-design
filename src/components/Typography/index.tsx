import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface IndexProps extends TypographyProps {}

const Index: React.FC<IndexProps> = ({ ...props }) => {
  return <Typography fontSize={16} {...props} />;
};

export default Index;
