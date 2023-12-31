import { renderHook } from '@testing-library/react';
import { usePreferredTheme } from './hooks';
import { getSavedUserTheme, saveUserTheme } from './logic.helper';

vi.mock('./logic.helper', () => ({
  getSavedUserTheme: vi.fn(),
  saveUserTheme: vi.fn(),
}));

afterEach(() => {
  vi.clearAllMocks();
});

describe('usePreferredTheme', () => {
  it('should return the stored theme if a theme is stored', () => {
    const storedTheme = 'dark';
    vi.mocked(getSavedUserTheme).mockReturnValueOnce(storedTheme);

    const {
      result: { current },
    } = renderHook(() => usePreferredTheme());

    expect(current).toBe(storedTheme);
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
        result: { current },
      } = renderHook(() => usePreferredTheme());

      expect(current).toBe(theme);
      expect(saveUserTheme).toHaveBeenCalledWith(theme);
    },
  );
});
