import * as React from 'react';

import { LanguageData, ThemeMode } from '@store/system';
import Typography from '@components/Typography';
import SvgIcon from '@components/SvgIcon';

export interface IIndexProps {
  data: Array<LanguageData>;
  current?: LanguageData;
  mode?: ThemeMode;
  onClick?: (params: LanguageData) => void;
}

const Index: React.FC<IIndexProps> = ({ data, current, mode = 'light', onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement;
    const li = target.closest('li');
    if (!li) return;

    const value = li.getAttribute('data-value');
    if (!value) return;

    const res = data.find(item => item.value === value);
    if (res && onClick) {
      onClick(res);
    }
  };

  return (
    <ul className="header-ul tools-ul language-ul-root" onClick={handleClick}>
      {data.map(item => {
        return (
          <li
            key={item.id}
            className={`header-li tools-li language-li-root ${current?.id === item?.id ? 'active' : 'init'}`}
            data-value={item.value}
          >
            {item?.isLogo && (
              <>
                {item?.icon ? (
                  (item?.[mode] ?? null)
                ) : item?.[mode] ? (
                  <SvgIcon name={item?.[mode]} className="li-logo-left" />
                ) : null}
              </>
            )}
            <Typography className="li-text">{item.text}</Typography>
          </li>
        );
      })}
    </ul>
  );
};

export default Index;
