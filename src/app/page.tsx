import PrimaryButton from "@meals/components/Buttons/Buttons";
import Text from "@meals/components/Text";
import { Image } from "antd";
import { BiSolidCoffeeBean } from "react-icons/bi";
import HomeFavCard from "./partials/HomeFavCard";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="w-full min-h-screen flex items-center min-[1440px]:px-24 px-16 justify-between relative">
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
            <Image
              preview={false}
              src="/illustrations/background-home2.png"
              alt=""
            />
          </div>
          <div className="absolute right-0 top-0 w-[700px] z-[-99]">
            <Image
              preview={false}
              src="/illustrations/backdrop-home.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-[100px] min-[1440px]:w-[150px] absolute left-0 bottom-0">
          <Image preview={false} alt="Backdrop" src="/images/Backdrop.png" />
        </div>
      </section>
    </main>
  );
}
