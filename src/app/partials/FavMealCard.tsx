import { IconButton } from "@meals/components/Buttons/Buttons";
import { PrimaryCard } from "@meals/components/Cards";
import Text from "@meals/components/Text";
import React, { useState } from "react";
import { Image as AntImage } from "antd";
import { MdFavoriteBorder, MdOutlineStar, MdFavorite } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa6";

interface FavMealCardProps {
  rate: number;
  src: string;
  itemName: string;
  price: string;
}

function FavMealCard(props: FavMealCardProps) {
  const { src, itemName, price, rate } = props;
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <PrimaryCard className="relative">
      <div className="p-5">
        <div className="flex items-center gap-x-2 absolute z-[50]">
          <MdOutlineStar className="w-5 h-5 text-yellow-400" />
          <Text className="font-kumbhSans">{rate || 0.0}</Text>
        </div>
        <div className="absolute right-5 z-[50]">
          <IconButton
            onClick={() => {
              setIsFavorite(!isFavorite);
            }}
            icon={
              isFavorite ? (
                <MdFavorite className="w-8 h-8 text-primaryBlue   " />
              ) : (
                <MdFavoriteBorder className="w-8 h-8" />
              )
            }
          />
        </div>
        <AntImage
          src={src || "/images/coffe.png"}
          alt={src}
          width={185}
          height={185}
          preview={false}
        />
        <div className="flex flex-col gap-y-3">
          <Text className="font-kumbhSans font-medium" size="h4">
            {itemName || "Item"}
          </Text>
          <div className="flex justify-between">
            <Text className="font-kumbhSans">{price || "Price"}</Text>
            <IconButton
              icon={<FaCartPlus className="w-7 h-7 text-primaryBlue" />}
            />
          </div>
        </div>
      </div>
    </PrimaryCard>
  );
}

export default FavMealCard;
