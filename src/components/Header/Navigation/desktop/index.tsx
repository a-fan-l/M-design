import React from 'react';
import { List, ListItem, ListItemButton, ListItemButtonProps } from '@mui/material';

import Options, { IIndexProps as OptionsProps } from '@components/Header/Navigation/options';

interface IIndexProps extends Partial<Pick<OptionsProps, 'current' | 'getlink'>> {
  data: Array<OptionsProps['data']>;
  isactive?: boolean;
  className?: ListItemButtonProps['className'];
}

const Index: React.FC<IIndexProps> = ({ data, current, className }) => {
  return (
    <List component="ul" className="menu-ul menu-ul-parent desktop">
      {data
        ?.filter(o => !o.disable && o.ismenu)
        .map((o, ii) => {
          const isactive = o.id === current?.id || o.children?.find(c => c.id === current?.id);

          return (
            <ListItemButton
              key={o.id || ii}
              component="li"
              className={`menu-li menu-li-parent ${isactive ? 'active' : 'idel'} ${className}`}
            >
              <Options data={o}></Options>
              {o.children && o.children.length > 0 && (
                <List component="ul" className="menu-ul menu-ul-child">
                  {o.children?.map((c, iii) => {
                    return (
                      <ListItem key={c.id || iii} className="menu-li menu-li-child">
                        <Options data={c}></Options>
                      </ListItem>
                    );
                  })}
                </List>
              )}
            </ListItemButton>
          );
        })}
    </List>
  );
};

export default Index;
