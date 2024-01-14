import { useIconClass, useIconSize } from './hooks';
import { IconProps } from './types';

export const Clock = ({ className, color, size }: IconProps) => {
  const finalClassName = useIconClass(className);
  const iconSize = useIconSize(size ?? 'md');

  return (
    <svg
      className={finalClassName}
      width={iconSize}
      height={iconSize}
      strokeWidth="1.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      viewBox="0 0 24 24"
    >
      <path d="M12 6v6h6" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
