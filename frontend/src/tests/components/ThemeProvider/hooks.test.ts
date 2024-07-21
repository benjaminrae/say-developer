import {renderHook} from '@testing-library/react';
import {usePreferredTheme} from '@/components/ThemeProvider/hooks.ts';
import {vi} from "vitest";
import {mockLocalStorage} from "@/tests/__mocks__/localStorage.ts";
import {THEME_STORAGE_KEY} from "@/components/ThemeProvider/constants.ts";


Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
});

afterEach(() => {
  mockLocalStorage.clear();
  vi.clearAllMocks();
});

describe('usePreferredTheme', () => {
  it('should return the stored theme if a theme is stored', () => {
    const storedTheme = 'dark';
    mockLocalStorage.setItem(THEME_STORAGE_KEY, storedTheme);
    window.matchMedia = vi.fn().mockImplementation(() => ({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));

    const {
      result,
    } = renderHook(() => usePreferredTheme());

    expect(result.current).toBe(storedTheme);
  });

  it.each(['dark', 'light'])(
    'should return the preferred theme if no theme is stored and save the preferred theme',
    (theme) => {
      window.matchMedia = vi.fn().mockImplementation((query) => ({
        matches: query === `(prefers-color-scheme: ${theme})`,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }));

      const {
        result: {current},
      } = renderHook(() => usePreferredTheme());

      expect(current).toBe(theme);
      expect(mockLocalStorage.getItem(THEME_STORAGE_KEY)).toBe(theme);
    },
  );
});
