export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'music-lens-theme';

export function getInitialTheme(
  storage: Pick<Storage, 'getItem'> = localStorage,
  media: Pick<MediaQueryList, 'matches'> = matchMedia('(prefers-color-scheme: dark)'),
): Theme {
  const saved = storage.getItem(THEME_STORAGE_KEY);
  if (saved === 'light' || saved === 'dark') return saved;
  return media.matches ? 'dark' : 'light';
}

export function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute(
    'content',
    theme === 'dark' ? '#171717' : '#f4f3ef',
  );
}

export function saveTheme(theme: Theme): void {
  localStorage.setItem(THEME_STORAGE_KEY, theme);
  applyTheme(theme);
}
