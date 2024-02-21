import React from "react";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { Container, Flex } from "@/components/Box";
import { SliderOptions, withSlider } from "@/components/Slider";
import HouseCard from "@/widgets/HouseCard";
import { BREAKPOINTS } from "@/theme/base";
import { DiscoverSection } from "./styles";

const { md } = BREAKPOINTS;

const options: SliderOptions = {
  speed: 600,
  slidesPerView: "auto",
  spaceBetween: 10,
  freeMode: true,
  breakpoints: {
    [md]: { slidesPerView: 4, spaceBetween: 15 },
  },
};

const HouseCardSlider = withSlider(HouseCard, options);

const data = [0, 0, 0, 0];

const DiscoverView = () => {
  return (
    <DiscoverSection p="60px 0">
      <Container>
        <Text as="h2" m="20px 0 10px">
          Discover our homes
        </Text>
        <Text mb={10}>
          Over 270,000 homes and apartments available for an exchange
        </Text>

        <HouseCardSlider sliderData={data} />

        <Flex justifyContent="center" m="45px 0 0">
          <Button maxWidth="342px" width="100%" as="a">
            See more homes
          </Button>
        </Flex>
      </Container>
    </DiscoverSection>
  );
};

export default DiscoverView;
