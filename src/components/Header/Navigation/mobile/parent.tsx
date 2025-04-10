import React from 'react';
import { Collapse, List, ListItemButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Options, { IIndexProps as OptionsProps } from '@components/Header/Navigation/options';
import ChildNav from '@components/Header/Navigation/mobile/child';

interface IIndexProps extends Partial<Pick<OptionsProps, 'current' | 'getlink'>> {
  data: Array<OptionsProps['data']>;
  current?: OptionsProps['data'];
  open?: boolean;
}

const Index: React.FunctionComponent<IIndexProps> = ({ data, open, current }) => {
  return (
    <Collapse in={open} unmountOnExit>
      <List component={'ul'} className="menu-nav menu-child-nav">
        {data
          ?.filter(o => !o.disable && o.ismenu)
          .map((o, ii) => {
            return (
              <ListItemButton
                key={ii}
                component="li"
                // className={`menu-li menu-li-parent ${isactive ? 'active' : 'idel'} ${className}`}
                className={`menu-li menu-li-parent`}
              >
                <Options className="menu-child-li" data={o}></Options>
                {open && o.children && o.children?.length > 0 && o.isarrow ? (
                  <KeyboardArrowDownIcon className="active" />
                ) : (
                  <ChevronRightIcon className="idel" />
                )}
                {o.children && o.children?.length > 0 && (
                  <ChildNav data={o.children} current={current} />
                )}
              </ListItemButton>
            );
          })}
      </List>
    </Collapse>
  );
};

export default Index;
