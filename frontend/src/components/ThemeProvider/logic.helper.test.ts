import { mockLocalStorage } from '../../__mocks__/localStorage';
import { THEME_STORAGE_KEY } from './constants';
import { getSavedUserTheme, isValidTheme, saveUserTheme } from './logic.helper';
import { Theme } from './types';

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
});

afterEach(() => {
  mockLocalStorage.clear();
});

describe('saveUserTheme', () => {
  it.each<[Theme, string | undefined]>([
    ['dark', 'dark'],
    ['light', 'light'],
    ['invalid' as Theme, undefined],
  ])('should save valid themes to local storage', (theme, storedTheme) => {
    saveUserTheme(theme);

    expect(mockLocalStorage.getItem(THEME_STORAGE_KEY)).toBe(storedTheme);
  });
});

describe('getSavedUserTheme', () => {
  it.each<[Theme, Theme | undefined]>([
    ['dark', 'dark'],
    ['light', 'light'],
    ['other' as Theme, undefined],
  ])('should get valid stored themes from local storage', (storedTheme, expectedTheme) => {
    mockLocalStorage.setItem(THEME_STORAGE_KEY, storedTheme);

    const savedTheme = getSavedUserTheme();

    expect(savedTheme).toBe(expectedTheme);
  });
});

describe('isValidTheme', () => {
  it.each<[Theme, boolean]>([
    ['dark', true],
    ['light', true],
    ['invalid' as Theme, false],
  ])('should identify if a theme is valid', (theme, isValid) => {
    const validationResult = isValidTheme(theme);

    expect(validationResult).toBe(isValid);
  });
});
