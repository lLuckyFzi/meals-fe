import PrimaryButton from "@meals/components/Buttons/Buttons";
import Text from "@meals/components/Text";
import { Image } from "antd";
import { BiSolidCoffeeBean } from "react-icons/bi";
import HomeFavCard from "./partials/HomeFavCard";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="w-full min-h-screen flex items-center px-24 justify-between relative">
        <div className="w-[60%]">
          <div className="flex items-center gap-x-2">
            <BiSolidCoffeeBean className="text-primaryBlue w-9 h-9" />
            <Text className="font-lusitana" size="h1">
              Enjoy The Good
            </Text>
          </div>
          <Text className="font-lusitana" size="h1">
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
            className="text-xl mt-10"
            icon={
              <BiSolidCoffeeBean className="coffe-icon text-white !important hover:bg-primaryBlue  w-4 h-4" />
            }
          >
            Choose Meals
          </PrimaryButton>
          <div className="mt-36">
            <Text size="h3" className="font-lusitana">
              Popular Food Mood
            </Text>
            <HomeFavCard />
          </div>
        </div>
        <div className="min-w-[40%] flex justify-end">
          <div className="w-[400px] ">
            <Image preview={false} src="/illustrations/background-home2.png" />
          </div>
          <div className="absolute right-0 top-0 w-[700px] z-[-99]">
            <Image preview={false} src="/illustrations/backdrop-home.png" />
          </div>
        </div>
      </section>
    </main>
  );
}
