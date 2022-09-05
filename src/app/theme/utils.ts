import { LanguageKeyType, ThemeKeyType } from '../slice/types';

/* istanbul ignore next line */
export const isSystemDark = window?.matchMedia
  ? window.matchMedia('(prefers-color-scheme: dark)')?.matches
  : undefined;

export function saveTheme(theme: ThemeKeyType) {
  window.localStorage && localStorage.setItem('selectedTheme', theme);
}

export function saveLanguage(theme: LanguageKeyType) {
  window.localStorage && localStorage.setItem('selectedLanguage', theme);
}

export function getThemeFromStorage(): ThemeKeyType | null {
  return window.localStorage
    ? (localStorage.getItem('selectedTheme') as ThemeKeyType) || null
    : null;
}

export function getLanguageFromStorage(): LanguageKeyType | null {
  return window.localStorage
    ? (localStorage.getItem('selectedLanguage') as LanguageKeyType) || null
    : null;
}
