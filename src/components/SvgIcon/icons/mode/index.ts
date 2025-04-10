import { SvgIconConfigItem } from '@components/SvgIcon/icons';
import dark from './dark.svg';
import light from './light.svg';

const props = {
  width: 24,
  height: 24,
  viewBox: '0 0 30 30',
};

const mode_dark: SvgIconConfigItem = {
  component: dark,
  props,
};

const mode_light: SvgIconConfigItem = {
  component: light,
  props,
};

const icons = {
  mode_dark,
  mode_light,
};

export type ModeNameType = keyof typeof icons;
export default icons;
