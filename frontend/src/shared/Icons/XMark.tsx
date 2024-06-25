import {useIconClass, useIconSize} from "./hooks.ts";
import {IconProps} from "./types.ts";

export const XMark = ({className, color, size}: IconProps): React.ReactElement => {
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
      <path stroke={color} strokeLinecap="round" strokeLinejoin="round"
            d="M6.758 17.243 12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"/>
    </svg>
  )
}
