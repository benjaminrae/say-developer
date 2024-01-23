import { useIconSize } from './hooks';
import { IconProps } from './types';

export const Microphone = ({ color, size }: IconProps) => {
  const iconSize = useIconSize(size ?? 'md');

  return (
    <svg
      width={iconSize}
      height={iconSize}
      strokeWidth="1.5"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <rect x="9" y="2" width="6" height="12" rx="3" stroke={color} />
      <path
        d="M5 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1M12 18v4m0 0H9m3 0h3"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
