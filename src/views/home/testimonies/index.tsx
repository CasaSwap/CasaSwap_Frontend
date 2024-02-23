import React from "react";
import { Text } from "@/components/Text";
import { TestimoniesWrapper } from "./styles";
import Link from "@/components/Links";
import { SliderOptions, withSlider } from "@/components/Slider";
import TesimonyCard from "./elements/TesimonyCard";
import { BREAKPOINTS } from "@/theme/base";
import { TrustpliotIcon } from "@/components/Svg";
import { Flex } from "@/components/Box";
const { xs, md } = BREAKPOINTS;

const options: SliderOptions = {
  speed: 600,
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
  breakpoints: {
    [xs]: { slidesPerView: 2, spaceBetween: 15 },
    [md]: { slidesPerView: 4, spaceBetween: 15 },
  },
};

const TesimonyCardSlider = withSlider(TesimonyCard, options);
const data = [0, 0, 0, 0, 0, 0];

const TestimoniesView = () => {
  return (
    <TestimoniesWrapper>
      <Text as="h2" m="20px 0 10px">
        The best way to travel
      </Text>
      <Text mb={40}>
        Hear from{" "}
        <Link>
          <Text color="#068295" as="span" tDecorations="underline">
            our members
          </Text>
        </Link>
      </Text>
      <TesimonyCardSlider sliderData={data} />
      <Flex flexDirection="column" justifyContent="center" m="10px 0 5px">
        <Text
          textAlign="center"
          fontSize="13px"
          mb="5px"
          fontFamily="'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
        >
          Rated <Text as="strong">4.6</Text> / 5 based on{" "}
          <Link>
            <Text as="span" tDecorations="underline">
              5,526 reviews
            </Text>
          </Link>
          . Showing our 4 & 5 star reviews.
        </Text>
        <TrustpliotIcon />
      </Flex>
    </TestimoniesWrapper>
  );
};

export default TestimoniesView;
