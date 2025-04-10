import * as React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

import useBreakpoints from '@hooks/useBreakpoints';
import MView from '@components/Header/Navigation/mobile';
import DView from '@components/Header/Navigation/desktop';
import { MRouter, IIndexProps as OptionsProps } from '@components/Header/Navigation/options';

export const useStyles = makeStyles(() => ({
  root: {
    '& .menu-ul': {
      display: 'flex',
      flexDirection: 'column',
    },
    '& .menu-ul-parent': {
      '&.desktop': {
        flexDirection: 'row',
      },
    },
    '& .menu-ul-child': {},
  },
}));

export { type MRouter };

export interface IIndexProps extends Partial<Pick<OptionsProps, 'current' | 'getlink'>> {
  data: Array<MRouter>;
}

const Index: React.FC<IIndexProps> = ({ ...props }) => {
  const { isdesktop } = useBreakpoints();
  const classes = useStyles();

  return (
    <Box className={`header-menu-root ${classes.root}`}>
      {isdesktop ? <MView {...props} /> : <DView {...props} />}
    </Box>
  );
};

export default Index;
