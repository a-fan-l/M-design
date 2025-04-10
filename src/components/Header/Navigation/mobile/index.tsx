import React, { useState } from 'react';
import { IconButton, Drawer, ListItemButtonProps } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DehazeIcon from '@mui/icons-material/Dehaze';

import { IIndexProps as OptionsProps } from '@components/Header/Navigation/options';
import View from '@components/Header/Navigation/mobile/parent';

interface IIndexProps extends Partial<Pick<OptionsProps, 'current' | 'getlink'>> {
  data: Array<OptionsProps['data']>;
  isactive?: boolean;
  className?: ListItemButtonProps['className'];
}

const Index: React.FC<IIndexProps> = ({ data, current, getlink }) => {
  const [open, setOpen] = useState<boolean>(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={onOpen} sx={{ cursor: 'pointer' }}>
        {open ? (
          <CloseIcon className="menu-switch menu-close" />
        ) : (
          <DehazeIcon className="menu-switch menu-open"></DehazeIcon>
        )}
      </IconButton>
      <Drawer anchor="right" open={open} onClose={onClose}>
        <View data={data} current={current} getlink={getlink} />
      </Drawer>
    </>
  );
};

export default Index;
