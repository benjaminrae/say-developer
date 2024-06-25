import {useIconClass, useIconSize} from './hooks';
import {IconProps} from './types';

export const Tick = ({size, color, className}: IconProps) => {
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
      <path stroke={color} strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7"/>
    </svg>
  );
};
