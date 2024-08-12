import { Button, ButtonProps } from "antd";
import React from "react";

import style from "./Buttons.module.css";
import { twMerge } from "tailwind-merge";

type ButtonsProps = ButtonProps;
type PrimaryButtonProps = ButtonsProps & {};

export default function PrimaryButton(props: PrimaryButtonProps) {
  const { children, className, ...otherProps } = props;

  return (
    <Button
      {...otherProps}
      type="primary"
      className={twMerge(
        style.primaryButton,
        className,
        "bg-secondaryBlue rounded-2xl font-kumbhSans px-6 py-4"
      )}
    >
      {children || "Button"}
    </Button>
  );
}