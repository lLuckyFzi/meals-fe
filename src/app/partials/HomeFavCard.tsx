import MiniCard from "@meals/components/Cards";
import Text from "@meals/components/Text";
import { Image } from "antd";
import React from "react";

function HomeFavCard() {
  return (
    <div className="flex flex-wrap gap-4 mt-5">
      {Array(1, 2, 3).map(() => {
        return (
          <MiniCard withPopularTag>
            <div className="flex items-center gap-x-4">
              <div className="w-20">
                <Image preview={false} src="/images/coffe.png" />
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
