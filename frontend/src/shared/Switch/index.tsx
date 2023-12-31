import { SwitchButton, SwitchInner, SwitchInput, SwitchLabel, SwitchStyled } from "./Switch.styled"
import { SwitchProps } from "./types"

export const Switch = ({id, isOn, handleChange, size}: SwitchProps) => {

  
  return (
    <SwitchStyled>
    <SwitchInput type="checkbox" onChange={handleChange} checked={isOn} id={id}/>
    <SwitchLabel htmlFor={id} size={size ?? "md"}>
      <SwitchInner />
      <SwitchButton />
    </SwitchLabel>
    </SwitchStyled>
  )
}
