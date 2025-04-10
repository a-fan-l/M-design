import { useTranslation } from 'react-i18next';

import { LANGUAGE_STORAGE_KEY } from '@constants/system';
import storage from '@utils/storage';
import useStore, { LanguageData } from '@store/system/language';

export interface UseLanguageProps {}

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const { current, open, ...actions } = useStore();

  // 修改语言的方法
  const modify = ({ isi18, nlanguage }: { isi18?: boolean; nlanguage: typeof current }) => {
    actions.change(nlanguage);
    storage.setItem({ key: LANGUAGE_STORAGE_KEY, value: nlanguage });

    if (isi18) {
      i18n.changeLanguage(nlanguage);
    }
  };

  // 切换语言的方法
  const change = (params: LanguageData, isi18?: boolean) => {
    if (params.value === current) return;
    modify({ isi18: isi18, nlanguage: params.value });
  };

  /// 初始化语言
  const setup = ({ data, isi18 }: { data: Array<LanguageData>; isi18?: boolean }) => {
    if (typeof window !== 'undefined') {
      const res = storage.getItem({ key: LANGUAGE_STORAGE_KEY });
      const lang = data.find(o => o.value === res) || data[0];
      modify({ isi18: isi18, nlanguage: lang?.value });
    }
  };

  return {
    language: current,
    open,
    show: actions.show,
    change,
    modify,
    setup,
  };
};

export default useLanguage;
