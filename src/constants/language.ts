import { LanguageData } from '@store/system';

export const enus: LanguageData = {
  id: 'en-US',
  value: 'en',
  text: 'global.language.en-US',
  light: 'language_en_light',
  dark: 'language_en_dark',
  islogo: true,
};

export const koKR: LanguageData = {
  id: 'ko-KR',
  value: 'ko',
  text: 'global.language.ko-KR',
  light: 'language_kr_light',
  dark: 'language_kr_dark',
  islogo: true,
};

export const ruRU: LanguageData = {
  id: 'ru-RU',
  value: 'ru',
  text: 'global.language.ru-RU',
  light: 'language_ru_light',
  dark: 'language_ru_dark',
  islogo: true,
};

export const ukUA: LanguageData = {
  id: 'uk-UA',
  value: 'uk',
  text: 'global.language.uk-UA',
  light: 'language_uk_light',
  dark: 'language_uk_dark',
  islogo: true,
};

export const languages = [enus, koKR, ruRU, ukUA];

export default languages;
