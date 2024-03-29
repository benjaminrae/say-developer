import { useIconClass, useIconSize } from './hooks';
import { IconProps } from './types';

export const Search = ({ size, color, className }: IconProps) => {
  const iconSize = useIconSize(size ?? 'md');
  const fullClassName = useIconClass(className);

  return (
    <svg
      width={iconSize}
      height={iconSize}
      strokeWidth="1.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      viewBox="0 0 24 24"
      className={fullClassName}
    >
      <path
        d="m17 17 4 4M3 11a8 8 0 1 0 16 0 8 8 0 0 0-16 0Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
