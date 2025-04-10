export type ThemeMode = 'light' | 'dark';
export interface ModeState {
    mode: ThemeMode;
    open: boolean;
}
type Actions = {
    show: (qty: ModeState['open']) => void;
    change: (qty: ModeState['mode']) => void;
};
declare const useStore: import("zustand").UseBoundStore<import("zustand").StoreApi<ModeState & Actions>>;
export default useStore;
//# sourceMappingURL=mode.d.ts.map