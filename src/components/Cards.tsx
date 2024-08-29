import { Card } from "antd";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Text from "./Text";

type CardsProps = {
  className?: string;
  withPopularTag?: boolean;
};

type MiniCardProps = CardsProps & {
  children: ReactNode;
};
type PrimaryCardProps = CardsProps & {
  children: ReactNode;
};

export default function MiniCard(props: MiniCardProps) {
  const { children, className, withPopularTag, ...otherProps } = props;

  const PopularTag = () => {
    return (
      <div className="bg-primaryBlue text-white absolute w-5 left-0 top-0 bottom-0 rounded-l text-start flex justify-center items-center">
        <Text
          className="-rotate-90 tracking-[3px] min-[1440px]:text-[8px] text-[7px]"
          size="caption"
        >
          POPULAR
        </Text>
      </div>
    );
  };

  return (
    <Card
      {...otherProps}
      bordered={false}
      className={twMerge(
        "py-2 px-5 min-[1440px]:h-[109px] h-20 min-[1440px]:min-w-[284px] m-0 relative overflow-hidden rounded-2xl",
        className,
        withPopularTag && "min-[1440px]:px-10 px-8"
      )}
    >
      {withPopularTag && <PopularTag />}
      {children}
    </Card>
  );
}

export function PrimaryCard(props: PrimaryCardProps) {
  const { children, className, withPopularTag, ...otherProps } = props;

  return (
    <Card {...otherProps} bordered={false}>
      {children}
    </Card>
  );
}
