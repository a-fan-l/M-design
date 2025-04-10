import { LanguageData } from '@store/system/language';
export interface UseLanguageProps {
}
export declare const useLanguage: () => {
    language: string;
    open: boolean;
    show: (qty: boolean) => void;
    change: (params: LanguageData, isi18?: boolean) => void;
    modify: ({ isi18, nlanguage }: {
        isi18?: boolean | undefined;
        nlanguage: string;
    }) => void;
    setup: ({ data, isi18 }: {
        data: Array<LanguageData>;
        isi18?: boolean | undefined;
    }) => void;
};
export default useLanguage;
//# sourceMappingURL=useLanguage.d.ts.map