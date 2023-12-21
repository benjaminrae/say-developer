import { rgbaToHex } from './colors';

describe('rgbaToHex', () => {
  it.each([
    [[0, 0, 0, 0], '#00000000'],
    [[255, 255, 255, 1], '#ffffffff'],
  ])('should convert rgba values to hex', (rgba, expectedHex) => {
    const [r, g, b, a] = rgba;
    const hex = rgbaToHex(r, g, b, a);

    expect(hex).toBe(expectedHex);
  });
});
