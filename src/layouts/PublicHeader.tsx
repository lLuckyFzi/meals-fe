"use client"

import LogoIcon from "@meals/components/Icons/LogoIcon";
import Text from "@meals/components/Text";
import React from "react";
import { BsCart3 } from "react-icons/bs";

function PublicHeader() {
  return (
    <div className="w-full flex justify-end items-center px-24 py-4 fixed">
      <div className="flex w-[55%] justify-between items-center">
        <div className="flex gap-x-3 items-center">
          <Text size="h1" className="font-corinthia">Meals</Text>
          <LogoIcon />
        </div>
        <BsCart3 className="text-primaryBlue w-7 h-7" />
      </div>
    </div>
  );
}

export default PublicHeader;
