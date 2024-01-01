import { useIconSize } from './hooks';
import { IconProps } from './types';

export const Sun = ({ color, size }: IconProps) => {
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
        d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM22 12h1M12 2V1M12 23v-1M20 20l-1-1M20 4l-1 1M4 20l1-1M4 4l1 1M1 12h1"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
