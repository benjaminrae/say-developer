import { SwitchInput, SwitchLabel, SwitchOff, SwitchOn, SwitchStyled } from './Switch.styled';
import { SwitchProps } from './types';

export const Switch = ({ id, isOn, handleChange, size, onChildren, offChildren }: SwitchProps) => {
  return (
    <SwitchStyled>
      <SwitchInput type="checkbox" onChange={handleChange} checked={isOn} id={id} />
      <SwitchLabel htmlFor={id} size={size ?? 'md'} $isOn={isOn}>
        {!isOn && <SwitchOff>{offChildren && offChildren}</SwitchOff>}
        {isOn && <SwitchOn>{onChildren && onChildren}</SwitchOn>}
      </SwitchLabel>
    </SwitchStyled>
  );
};
