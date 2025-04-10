import { SvgIconProps } from '@mui/material';
declare const icons: {
    mode_dark: SvgIconConfigItem;
    mode_light: SvgIconConfigItem;
    language_en_dark: SvgIconConfigItem;
    language_en_light: SvgIconConfigItem;
    language_kr_dark: SvgIconConfigItem;
    language_kr_light: SvgIconConfigItem;
    language_ru_dark: SvgIconConfigItem;
    language_ru_light: SvgIconConfigItem;
    language_uk_dark: SvgIconConfigItem;
    language_uk_light: SvgIconConfigItem;
    language_zh_dark: SvgIconConfigItem;
    language_zh_light: SvgIconConfigItem;
};
export type IconNameType = keyof typeof icons;
export default icons;
export interface SvgIconConfigItem {
    component: SvgIconProps['component'];
    props: SvgIconProps;
}
export interface SvgIconConfig {
    [key: string]: SvgIconConfigItem;
}
//# sourceMappingURL=index.d.ts.map