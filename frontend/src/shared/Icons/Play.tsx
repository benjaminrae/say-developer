import {useIconClass, useIconSize} from './hooks';
import {IconProps} from './types';

export const Play = ({size, color, className}: IconProps) => {
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
      <path stroke={color} strokeLinecap="round" strokeLinejoin="round"
            d="M6.906 4.537A.6.6 0 0 0 6 5.053v13.894a.6.6 0 0 0 .906.516l11.723-6.947a.6.6 0 0 0 0-1.032L6.906 4.537Z"/>
    </svg>
  );
};
