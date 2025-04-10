import { SvgIconProps } from '@mui/material';

import language from './language';
import mode from './mode';

const icons = {
  ...language,
  ...mode,
};

export type IconNameType = keyof typeof icons;
export default icons;

export interface SvgIconConfigItem {
  component: SvgIconProps['component'];
  props: SvgIconProps;
}

export interface SvgIconConfig {
  [key: string]: SvgIconConfigItem;
}
