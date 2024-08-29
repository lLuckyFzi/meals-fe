import React, { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps {
  children: ReactNode;
}
type SectionType = HTMLAttributes<HTMLElement> & SectionProps;

function Section(props: SectionType) {
  const { children, className, ...otherProps } = props;

  return (
    <section
      {...otherProps}
      className={twMerge(
        className,
        "w-full min-h-screen flex items-center min-[1440px]:px-24 px-16 justify-between relative"
      )}
    >
      {children}
    </section>
  );
}

export default Section;
