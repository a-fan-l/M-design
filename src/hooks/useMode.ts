import { MODE_STORAGE_KEY } from '@constants/system';
import storage from '@utils/storage';

import userStore, { ThemeMode } from '@store/system/mode';

export const useMode = () => {
  const { mode, open, ...actions } = userStore();

  const modify = (params: ThemeMode) => {
    if (params === mode) return;
    actions.change(params);
    storage.setItem({ key: MODE_STORAGE_KEY, value: params });
  };

  // 切换语言的方法
  const change = (params: ThemeMode) => {
    if (params === mode) return;
    modify(params);
  };

  // 初始化语言
  const setup = () => {
    if (typeof window !== 'undefined') {
      const res = storage.getItem({ key: MODE_STORAGE_KEY });
      if (res) {
        modify(res as ThemeMode);
      }
    }
  };

  return {
    mode,
    open,
    show: actions.show,
    change,
    modify,
    setup,
  };
};

export default useMode;
