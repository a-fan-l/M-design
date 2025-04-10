import { create } from 'zustand';
import { produce } from 'immer';

import { enus } from '@constants/language';
import { LanguageNameType } from '@components/SvgIcon/icons/language';

export type Language = keyof LanguageConfig;

export type LanguageData<
  T = {
    icon?: {
      light?: React.ReactNode;
      dark?: React.ReactNode;
    };
  },
> = LanguageBaseData & {} & T;

export interface LanguageBaseData {
  id: keyof LanguageConfig;
  text?: string;
  desc?: string;
  value: string;
  isLogo?: boolean;
  dark?: LanguageNameType;
  light?: LanguageNameType;
}

// 基础语言配置
interface BaseLanguageConfig {
  'en-US': LanguageData;
  'ko-KR': LanguageData;
  'uk-UA': LanguageData;
  'ru-RU': LanguageData;
}

export interface LanguageConfig extends BaseLanguageConfig {}

export interface LanguageState {
  current: string;
  open: boolean;
}

type Actions = {
  show: (qty: LanguageState['open']) => void;
  change: (qty: LanguageState['current']) => void;
};

const useStore = create<LanguageState & Actions>(set => ({
  current: enus.value,
  open: false,
  show: (params: boolean) =>
    set(
      produce(state => {
        state.open = params;
      })
    ),
  change: (params: string) =>
    set(
      produce(state => {
        state.current = params;
      })
    ),
}));

export default useStore;
