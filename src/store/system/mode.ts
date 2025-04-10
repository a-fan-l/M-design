import { create } from 'zustand';
import { produce } from 'immer';

export type ThemeMode = 'light' | 'dark';

export interface ModeState {
  mode: ThemeMode;
  open: boolean;
}

type Actions = {
  show: (qty: ModeState['open']) => void;
  change: (qty: ModeState['mode']) => void;
};

const useStore = create<ModeState & Actions>(set => ({
  mode: 'light',
  open: false,
  show: (params: boolean) =>
    set(
      produce(state => {
        state.open = params;
      })
    ),
  change: (params: ThemeMode) =>
    set(
      produce(state => {
        state.mode = params;
      })
    ),
}));

export default useStore;
