import { useIconSize } from './hooks';
import { IconProps } from './types';

export const Moon = ({ size, color }: IconProps) => {
  const iconSize = useIconSize(size ?? 'md');

  return (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <path
        d="M3 11.507a9.493 9.493 0 0 0 18 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.494 9.494 0 0 0 3 11.507Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
