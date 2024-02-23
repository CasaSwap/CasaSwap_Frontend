import React from "react";
import Link from "@/components/Links";
import { Image } from "@/components/Image";
import LakeImage from "@/assets/home/LaTaohe.png";
import { CardTitle, CardWrapper } from "./styles";

const DestinationCard = () => {
  return (
    <CardWrapper>
      <Link>
        <Image src={LakeImage} width={327} height={457} alt="House Image" />
        <CardTitle fontSize={35} m="24px 24px 30px" color="white">
          Lake Tahoe
        </CardTitle>
      </Link>
    </CardWrapper>
  );
};

export default DestinationCard;
