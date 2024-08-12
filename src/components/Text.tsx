import React from "react";
import { twMerge } from "tailwind-merge";

type SizeParagraphType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle"
  | "body1"
  | "body2"
  | "caption";

type IProps = React.HTMLAttributes<HTMLParagraphElement> & {
  size?: SizeParagraphType;
};

function sizeParagraph(size: SizeParagraphType) {
  if (size === "h1") {
    return "meals-h1";
  }
  if (size === "h2") {
    return "meals-h2";
  }
  if (size === "h3") {
    return "meals-h3";
  }
  if (size === "h4") {
    return "meals-h4";
  }
  if (size === "h5") {
    return "meals-h5";
  }
  if (size === "h6") {
    return "meals-h6";
  }
  if (size === "subtitle") {
    return "meals-subtitle";
  }
  if (size === "body1") {
    return "meals-body1";
  }
  if (size === "body2") {
    return "meals-body2";
  }
  if (size === "caption") {
    return "meals-caption";
  }

  return "text-caption";
}

function Text(props: IProps) {
  const { children, size = "subtitle", className, ...restProps } = props;

  return (
    <span
      className={twMerge(["block", sizeParagraph(size), className])}
      {...restProps}
    >
      {children}
    </span>
  );
}

export default Text;
