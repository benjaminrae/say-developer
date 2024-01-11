/**
 * https://moon.io/ Design System
 */

import { rgbaToHex } from '../utils/colors';

export const moonLight = {
  piccolo: rgbaToHex(78, 70, 180, 1),
  hit: rgbaToHex(64, 166, 159, 1),
  beerus: rgbaToHex(226, 226, 226, 1),
  gohan: rgbaToHex(255, 255, 255, 1),
  goten: rgbaToHex(255, 255, 255, 1),
  goku: rgbaToHex(245, 245, 245, 1),
  bulma: rgbaToHex(0, 0, 0, 1),
  trunks: rgbaToHex(89, 93, 98, 1),
  popo: rgbaToHex(0, 0, 0, 1),
  jiren: rgbaToHex(78, 70, 180, 0.12),
  heles: rgbaToHex(0, 0, 0, 0.04),
  zeno: rgbaToHex(0, 0, 0, 0.56),
} as const;

export const moonDark = {
  piccolo: rgbaToHex(91, 80, 238, 1),
  hit: rgbaToHex(64, 166, 159, 1),
  beerus: rgbaToHex(68, 68, 68, 1),
  gohan: rgbaToHex(31, 31, 31, 1),
  goten: rgbaToHex(255, 255, 255, 1),
  goku: rgbaToHex(11, 11, 11, 1),
  bulma: rgbaToHex(255, 255, 255, 1),
  trunks: rgbaToHex(153, 156, 160, 1),
  popo: rgbaToHex(0, 0, 0, 1),
  jiren: rgbaToHex(91, 80, 238, 0.32),
  heles: rgbaToHex(255, 255, 255, 0.12),
  zeno: rgbaToHex(0, 0, 0, 0.56),
} as const;

export const moonSupportive = {
  krillin: rgbaToHex(255, 179, 25, 1),
  'krillin-60': rgbaToHex(255, 179, 25, 0.56),
  'krillin-10': rgbaToHex(255, 179, 25, 0.08),
  chichi: rgbaToHex(255, 78, 100, 1),
  'chichi-60': rgbaToHex(255, 78, 100, 0.56),
  'chichi-10': rgbaToHex(255, 78, 100, 0.08),
  roshi: rgbaToHex(46, 125, 50, 1),
  'roshi-60': rgbaToHex(46, 125, 50, 0.56),
  'roshi-10': rgbaToHex(46, 125, 50, 0.08),
  dodoria: rgbaToHex(211, 48, 48, 1),
  'dodoria-60': rgbaToHex(211, 48, 48, 0.56),
  'dodoria-10': rgbaToHex(211, 48, 48, 0.08),
  cell: rgbaToHex(149, 241, 213, 1),
  'cell-60': rgbaToHex(149, 241, 213, 0.56),
  'cell-10': rgbaToHex(149, 241, 213, 0.08),
  raditz: rgbaToHex(179, 128, 74, 1),
  'raditz-60': rgbaToHex(179, 128, 74, 0.56),
  'raditz-10': rgbaToHex(179, 128, 74, 0.08),
  whis: rgbaToHex(52, 72, 240, 1),
  'whis-60': rgbaToHex(52, 72, 240, 0.56),
  'whis-10': rgbaToHex(52, 72, 240, 0.08),
  frieza: rgbaToHex(92, 51, 207, 1),
  'frieza-60': rgbaToHex(92, 51, 207, 0.56),
  'frieza-10': rgbaToHex(92, 51, 207, 0.08),
  nappa: rgbaToHex(114, 85, 80, 1),
  'nappa-60': rgbaToHex(114, 85, 80, 0.56),
  'nappa-10': rgbaToHex(114, 85, 80, 0.08),
} as const;
