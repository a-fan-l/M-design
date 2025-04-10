import React from 'react';
import { Collapse, List, ListItem } from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Options, { IIndexProps as OptionsProps } from '@components/Header/Navigation/options';

interface IIndexProps extends Partial<Pick<OptionsProps, 'current' | 'getlink'>> {
  data: Array<OptionsProps['data']>;
  current?: OptionsProps['data'];
  open?: boolean;
}

const Index: React.FunctionComponent<IIndexProps> = ({ data, open, getlink }) => {
  return (
    <Collapse in={open} unmountOnExit>
      <List component={'ul'} className="menu-nav menu-child-nav">
        {data
          ?.filter(o => !o.disable && o.ismenu)
          .map((o, ii) => {
            return (
              <ListItem component="li" key={ii}>
                <Options className="menu-child-li" data={o} getlink={getlink}></Options>
                {open ? (
                  <KeyboardArrowDownIcon className="active" />
                ) : (
                  <ChevronRightIcon className="idel" />
                )}
              </ListItem>
            );
          })}
      </List>
    </Collapse>
  );
};

export default Index;
