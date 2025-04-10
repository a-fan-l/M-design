import { SvgIconConfigItem } from '@components/SvgIcon/icons';

import enusdark from './en-US-dark.svg';
import enuslight from './en-US-light.svg';
import krdark from './kr-dark.svg';
import krlight from './kr-light.svg';
import rudark from './russian-dark.svg';
import rulight from './russian-light.svg';
import ukdark from './uk-UA-dark.svg';
import uklight from './uk-UA-light.svg';
import zhdark from './zh-CN-dark.svg';
import zhlight from './zh-CN-light.svg';

const props = {
  width: 24,
  height: 24,
  viewBox: '0 0 30 30',
};

const language_en_dark: SvgIconConfigItem = {
  component: enusdark,
  props,
};

const language_en_light: SvgIconConfigItem = {
  component: enuslight,
  props,
};

const language_kr_dark: SvgIconConfigItem = {
  component: krdark,
  props,
};

const language_kr_light: SvgIconConfigItem = {
  component: krlight,
  props,
};

const language_ru_dark: SvgIconConfigItem = {
  component: rudark,
  props,
};

const language_ru_light: SvgIconConfigItem = {
  component: rulight,
  props,
};

const language_uk_dark: SvgIconConfigItem = {
  component: ukdark,
  props,
};

const language_uk_light: SvgIconConfigItem = {
  component: uklight,
  props,
};

const language_zh_dark: SvgIconConfigItem = {
  component: zhdark,
  props,
};

const language_zh_light: SvgIconConfigItem = {
  component: zhlight,
  props,
};

const icons = {
  language_en_dark,
  language_en_light,
  language_kr_dark,
  language_kr_light,
  language_ru_dark,
  language_ru_light,
  language_uk_dark,
  language_uk_light,
  language_zh_dark,
  language_zh_light,
};

export type LanguageNameType = keyof typeof icons;
export default icons;
