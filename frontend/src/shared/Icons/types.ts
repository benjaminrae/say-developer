import React from "react";

export type IconProps = {}

export type Icon = React.FC<IconProps> | React.MemoExoticComponent<(props: IconProps) => JSX.Element>
