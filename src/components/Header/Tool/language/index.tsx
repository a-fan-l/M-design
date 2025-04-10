import React, { useMemo, useState, useRef } from 'react';
import { IconButton, IconButtonProps } from '@mui/material';

import Container from '@components/Header/Tool/container';
import SvgIcon from '@components/SvgIcon';
import Modal, { IIndexProps as ModalProps } from '@components/Header/Modal';
import LanguageNav, { IIndexProps as LanguageNavProps } from './nav';

export interface IIndexProps
  extends Pick<LanguageNavProps, 'data'>,
    Partial<Pick<LanguageNavProps, 'current' | 'mode'>> {
  order?: number;
  children?: React.ReactNode;
  onChange?: LanguageNavProps['onClick'];
  buttonprops?: IconButtonProps;
  modalprops?: Omit<ModalProps, 'open' | 'onClose' | 'anchorEl'>;
}

const Index: React.FC<IIndexProps> = ({
  data,
  current,
  order = 4,
  children,
  mode = 'light',
  buttonprops,
  modalprops,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const handleshow = () => {
    setOpen(true);
  };

  const handleclose = () => {
    setOpen(false);
  };

  const logo = useMemo(() => {
    if (current?.icon?.[mode]) {
      return current.icon[mode];
    }
    return null;
  }, [current, mode]);

  return (
    <Container className="header-tool-item  header-tool-language language-root" order={order}>
      <IconButton
        onClick={handleshow}
        ref={ref}
        {...buttonprops}
        className={`tool-btn language-btn ${buttonprops?.className}`}
      >
        {current?.isLogo && (
          <>
            {current.icon ? (
              logo
            ) : current?.[mode] ? (
              <SvgIcon name={current?.[mode]} className="tool-logo" />
            ) : null}
          </>
        )}
      </IconButton>

      {children ?? (
        <Modal open={open} keepMounted anchorEl={ref.current} onClose={handleclose} {...modalprops}>
          <LanguageNav data={data} current={current} mode={mode} onClick={onChange} />
        </Modal>
      )}
    </Container>
  );
};

export { type LanguageNavProps };

export type MLanguageProps = typeof Index & {
  Nav: typeof LanguageNav;
};

export const MLanguage = Index as MLanguageProps;
MLanguage.Nav = LanguageNav;

export default MLanguage;
