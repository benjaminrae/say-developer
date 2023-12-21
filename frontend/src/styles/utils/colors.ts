export const rgbaToHex = (red: number, green: number, blue: number, alpha: number): string => {
  const r = Math.min(255, Math.max(0, red));
  const g = Math.min(255, Math.max(0, green));
  const b = Math.min(255, Math.max(0, blue));
  const a = Math.min(1, Math.max(0, alpha));

  const hexR = r.toString(16).padStart(2, '0');
  const hexG = g.toString(16).padStart(2, '0');
  const hexB = b.toString(16).padStart(2, '0');
  const hexA = Math.round(a * 255)
    .toString(16)
    .padStart(2, '0');

  return `#${hexR}${hexG}${hexB}${hexA}`;
};
