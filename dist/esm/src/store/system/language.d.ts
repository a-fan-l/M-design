/// <reference types="react" />
import { LanguageNameType } from '@components/SvgIcon/icons/language';
export type Language = keyof LanguageConfig;
export type LanguageData<T = {
    icon?: {
        light?: React.ReactNode;
        dark?: React.ReactNode;
    };
}> = LanguageBaseData & {} & T;
export interface LanguageBaseData {
    id: keyof LanguageConfig;
    text?: string;
    desc?: string;
    value: string;
    islogo?: boolean;
    dark?: LanguageNameType;
    light?: LanguageNameType;
}
interface BaseLanguageConfig {
    'en-US': LanguageData;
    'ko-KR': LanguageData;
    'uk-UA': LanguageData;
    'ru-RU': LanguageData;
}
export interface LanguageConfig extends BaseLanguageConfig {
}
export interface LanguageState {
    current: string;
    open: boolean;
}
type Actions = {
    show: (qty: LanguageState['open']) => void;
    change: (qty: LanguageState['current']) => void;
};
declare const useStore: import("zustand").UseBoundStore<import("zustand").StoreApi<LanguageState & Actions>>;
export default useStore;
//# sourceMappingURL=language.d.ts.map