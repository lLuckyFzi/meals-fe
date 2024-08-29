"use client";

import { Image as AntImage, Button, Col, Input, Pagination, Row } from "antd";
import Image from "next/image";
import Text from "@meals/components/Text";
import Section from "@meals/components/Containers/Section";
import PrimaryButton from "@meals/components/Buttons/Buttons";
import RadioGroup from "@meals/components/Radios/RadioGroup";
import HomeFavCard from "./partials/HomeFavCard";
import FavMealCard from "./partials/FavMealCard";

import { BiSolidCoffeeBean } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Section id="landing-page">
        <div className="w-[70%] flex flex-col min-[1440px]:gap-y-32 gap-y-24">
          <div>
            <div className="flex items-center gap-x-2">
              <BiSolidCoffeeBean className="text-primaryBlue w-9 h-9" />
              <Text className="font-lusitana leading-none" size="h1">
                Enjoy The Good
              </Text>
            </div>
            <Text className="font-lusitana leading-none" size="h1">
              Mood With Food
            </Text>
            <Text
              className="font-kumbhSans text-grayText w-[500px] pt-5"
              size="h6"
            >
              Beautiful dishes sometimes make the mood feel better, and a cup of
              coffee is no exception.
            </Text>
            <PrimaryButton
              className="min-[1440px]:mt-10 mt-5"
              icon={
                <BiSolidCoffeeBean className="coffe-icon text-white !important hover:bg-primaryBlue  w-4 h-4" />
              }
            >
              Choose Meals
            </PrimaryButton>
          </div>
          <div>
            <Text size="h3" className="font-lusitana">
              Popular Food Mood
            </Text>
            <HomeFavCard />
          </div>
        </div>
        <div className="min-w-[30%] flex justify-end">
          <div className="min-[1440px]:w-[400px] w-[250px]">
            <AntImage
              preview={false}
              src="/illustrations/background-home2.png"
              alt=""
            />
          </div>
          <div className="absolute right-0 top-0 w-[700px] z-[-99]">
            <AntImage
              preview={false}
              src="/illustrations/backdrop-home.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-[100px] min-[1440px]:w-[150px] absolute left-0 bottom-0">
          <AntImage preview={false} alt="Backdrop" src="/images/Backdrop.png" />
        </div>
      </Section>
      <Section id="about-us">
        <div className="flex items-center gap-x-9 h-full">
          <div className="w-[50%]">
            <Text className="font-lusitana" size="h1">
              About Us
            </Text>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <div className="w-full h-[200px]">
                  <Image
                    src="/images/image-1.png"
                    alt="Second Section"
                    width={200}
                    height={200}
                    className="object-cover w-full h-[200px]"
                  />
                </div>
              </Col>
              <Col span={12}>
                <div className="w-full h-[200px]">
                  <Image
                    src="/images/image-2.png"
                    alt="Third Section"
                    width={500}
                    height={250}
                    className="object-cover w-full h-[200px]"
                  />
                </div>
              </Col>
              <Col span={24}>
                <div className="w-full h-[300px]">
                  <Image
                    src="/images/image-3.png"
                    alt="First Section"
                    width={500}
                    height={200}
                    className="object-cover w-full h-[300px]"
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="flex flex-col justify-start w-[50%] gap-y-6">
            <Text className="font-lusitana" size="h4">
              Cozy Place
            </Text>
            <Text className="font-kumbhSans text-gray-500" size="subtitle">
              Caffe Meals, your go-to spot for work and relaxation in Bandung.
              Our café offers a cozy environment with comfortable seating,
              plenty of power outlets, and high-speed Wi-Fi, perfect for
              professionals and students alike.
            </Text>
            <Text className="font-kumbhSans text-gray-500" size="subtitle">
              Indulge in our delicious menu featuring cheesecake, donuts, and a
              variety of pastries, all paired perfectly with our expertly brewed
              coffee. At Caffe Meals, we blend comfort, productivity, and
              delightful flavors. Join us and make Caffe Meals your favorite
              work-friendly café!
            </Text>
            <span>
              <Button
                type="text"
                icon={<CiLocationOn />}
                className="text-primaryBlue text-xl"
              >
                Map
              </Button>
            </span>
          </div>
        </div>
      </Section>
      <Section id="choose-meals" className="mb-11">
        <div className="w-full px-24 flex flex-col gap-y-24">
          <div className="text-center flex justify-center">
            <Text
              size="h1"
              className="w-[20%] leading-[30px] min-[1440px]:w-full"
            >
              Choose Your Favorite Meals
            </Text>
          </div>
          <div className="flex flex-col gap-y-14">
            <div className="flex justify-between">
              <Input
                placeholder="Search Meals"
                suffix={<CiSearch />}
                className="w-80 rounded-2xl"
              />
              <RadioGroup
                values={[
                  {
                    value: "all-meals",
                    label: "All Meals",
                  },
                  {
                    value: "eatery",
                    label: "Eatery",
                  },
                  {
                    value: "drinks",
                    label: "Drinks",
                  },
                  {
                    value: "popular",
                    label: "Popular",
                  },
                ]}
              />
            </div>
            <div className="flex gap-x-[100px] gap-y-[70px] min-[1440px]:gap-20 justify-between flex-wrap">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]?.map((d) => {
                return (
                  <FavMealCard
                    key={d}
                    itemName="Tiramisu Cake"
                    price="39k"
                    rate={5.5}
                    src="/images/coffe.png"
                  />
                );
              })}
            </div>
            <div className="flex justify-end">
              <Pagination defaultCurrent={1} total={60} />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
