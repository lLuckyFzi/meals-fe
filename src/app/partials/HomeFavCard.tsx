import MiniCard from "@meals/components/Cards";
import Text from "@meals/components/Text";
import { Image } from "antd";
import React from "react";

function HomeFavCard() {
  return (
    <div className="flex flex-wrap gap-4 min-[1440px]:mt-5 mt-2">
      {Array(1, 2, 3).map((_, i) => {
        return (
          <MiniCard key={i} withPopularTag>
            <div className="flex items-center gap-x-4">
              <div className="min-[1440px]:w-20 w-14">
                <Image preview={false} src="/images/coffe.png" alt="" />
              </div>
              <div>
                <Text size="h6" className="font-kumbhSans">
                  Coffee Latte
                </Text>
                <Text size="h6">29k</Text>
              </div>
            </div>
          </MiniCard>
        );
      })}
    </div>
  );
}

export default HomeFavCard;
