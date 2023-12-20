export type IconFC = {}

xport type NativeButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type ButtonProps = NativeButtonProps & {
  variant?: ButtonVariant;
  leftIcon?: IconFC;
  rightIcon?: IconFC;
  size?: Size;
}

export type ButtonStyledProps = ButtonProps

export type ButtonVariant = "primary" | "secondary" | "stroke" | "ghost";

