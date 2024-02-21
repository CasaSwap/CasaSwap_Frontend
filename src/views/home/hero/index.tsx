import React from "react";
import { Image } from "@/components/Image";
import { Text } from "@/components/Text";
import { Input } from "@/components/Input";
import { Container } from "@/components/Box";
import HomeImage from "@/assets/home/home-background.png";

import {
  HeroSection,
  HeroTitleWrapper,
  MobileSubScriberWrapper,
  SearchBarWrapper,
  SubScriberItemWrapper,
  SubScriberWrapper,
} from "./styles";

const subscrivers = [
  {
    data: "+150,000",
    title: "subscribers",
  },
  {
    data: "145",
    title: "countries",
  },
  {
    data: "Every 2 minutes",
    title: "an exchange is finalized",
  },
];

const HeroView = () => {
  return (
    <HeroSection>
      <HeroTitleWrapper>
        <Text
          color="white"
          as="h1"
          textAlign={["left", "left", "center"]}
          mt={["35%", "35%", "7%"]}
          fontSize={["32px", "32px", "48px", "48px"]}
        >
          Travel more for less with the #1 home exchange community in the world
        </Text>
        <SearchBarWrapper>
          <Text fontSize={18} textAlign="left" m="20px 0">
            Where would you like to go?
          </Text>
          <Input placeholder="Where are you going?" scale="lg"></Input>
        </SearchBarWrapper>
      </HeroTitleWrapper>
      <SubScriberWrapper p="28px 0">
        <Container display="flex" justifyContent="center">
          {subscrivers.map((_info, idx) => (
            <SubScriberItemWrapper key={`subscriberInfo_${idx}`}>
              <Text fontSize={["16px", "16px", "24px"]} fontWeight={700}>
                {_info.data}
              </Text>
              <Text fontSize="14px">{_info.title}</Text>
            </SubScriberItemWrapper>
          ))}
        </Container>
      </SubScriberWrapper>
      <MobileSubScriberWrapper>
        {subscrivers.map((_info, idx) => (
          <SubScriberItemWrapper key={`subscriberInfo_${idx}`}>
            <Text fontSize={["16px", "16px", "24px"]} fontWeight={700}>
              {_info.data}
            </Text>
            <Text fontSize="14px">{_info.title}</Text>
          </SubScriberItemWrapper>
        ))}
      </MobileSubScriberWrapper>
      <Image src={HomeImage} fill priority alt="Hero Image"></Image>
    </HeroSection>
  );
};

export default React.memo(HeroView);
