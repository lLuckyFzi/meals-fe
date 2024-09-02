import React from "react";
import Text from "@meals/components/Text";
import Image from "next/image";
import Link from "next/link";
import LogoIcon from "@meals/components/Icons/LogoIcon";

import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";

const ListSectionLink = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Choose Meals",
    href: "#choose-meals",
  },
];

const ListSocialMediaLink = [
  {
    icon: <FaInstagram className="w-5 h-5" />,
    href: "#home",
  },
  {
    icon: <RiTwitterXLine className="w-5 h-5" />,
    href: "#about",
  },
  {
    icon: <SlSocialFacebook className="w-5 h-5" />,
    href: "#choose-meals",
  },
];

function PublicFooter() {
  return (
    <div className="relative flex flex-col gap-y-10">
      <div className="absolute inset-0 z-[-1] bg-gradient-to-t from-blue-100 to-transparent"></div>
      <div className="flex justify-between items-start px-[100px]">
        <div className="relative">
          <div className="flex flex-col w-[190px] gap-y-4">
            <div className="flex items-center gap-x-3">
              <Text className="font-corinthia text-4xl font-bold">Meals</Text>
              <LogoIcon />
            </div>
            <Text className="leading-[20px] font-light text-darkGrayText">
              A good Mood can come from just a Meal
            </Text>
          </div>
          <div className="w-[350px] right-[-250px] top-[-80px] -translate-y-7 absolute">
            <Image
              src="/images/tree-illustration.png"
              width={550}
              height={400}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <Text className="font-bold" size="h6">
            Section
          </Text>
          <div className="flex flex-col gap-y-3">
            {ListSectionLink.map((d) => {
              return (
                <Link key={d.href} href={d.href}>
                  <Text className="font-normal text-darkGrayText" size="h6">
                    {d.label}
                  </Text>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <Text className="font-bold" size="h6">
            Address
          </Text>
          <div className="flex flex-col gap-y-3">
            <Text className="font-normal text-darkGrayText" size="h6">
              Jn. Bojong Soreang, Kab Bandung, Jawa Barat
            </Text>
            <Text className="font-normal text-darkGrayText" size="h6">
              09:00 AM - 10:00 PM
            </Text>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center gap-x-4">
          {ListSocialMediaLink.map((d) => {
            return (
              <Link key={d.href} href={d.href}>
                <div className="bg-white text-primaryBlue p-2 w-8 h-8 flex justify-center items-center rounded-full hover:bg-primaryBlue hover:text-white duration-300">
                  {d.icon}
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center py-4">
          <Text className="text-darkGrayText" size="subtitle">
            Copyright @ 2024 Lucky | All rights reserved
          </Text>
        </div>
      </div>
    </div>
  );
}

export default PublicFooter;
