"use client"

import LogoIcon from "@meals/components/Icons/LogoIcon";
import Text from "@meals/components/Text";
import React from "react";
import { BsCart3 } from "react-icons/bs";

function PublicHeader() {
  return (
    <div className="w-full flex justify-end items-center min-[1440px]:px-24 px-16 min-[1440px]:py-4 py-2 fixed bg-white z-[99]">
      <div className="flex w-[55%] justify-between items-center">
        <div className="flex gap-x-3 items-center">
          <Text size="h1" className="font-corinthia">Meals</Text>
          <LogoIcon />
        </div>
        <BsCart3 className="text-primaryBlue min-[1440px]:w-7 min-[1440px]:h-7 w-4 h-4" />
      </div>
    </div>
  );
}

export default PublicHeader;
