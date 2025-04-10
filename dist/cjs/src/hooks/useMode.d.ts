import { ThemeMode } from '@store/system/mode';
export declare const useMode: () => {
    mode: ThemeMode;
    open: boolean;
    show: (qty: boolean) => void;
    change: (params: ThemeMode) => void;
    modify: (params: ThemeMode) => void;
    setup: () => void;
};
export default useMode;
//# sourceMappingURL=useMode.d.ts.map