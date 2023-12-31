import React, { ChangeEventHandler } from "react";
import { Size } from "styled-components";
import { Variant } from "../../styles/types";

export type NativeDivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type SwitchProps = NativeDivProps & {
  variant?: Variant,
  size?: Size,
  isOn: boolean,
  handleChange: ChangeEventHandler<HTMLInputElement>
}

export type SwitchStyledProps = Omit<SwitchProps, "isOn" | "handleChange">;
