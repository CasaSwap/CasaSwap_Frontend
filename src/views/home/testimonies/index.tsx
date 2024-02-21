import React from "react";
import { Text } from "@/components/Text";
import { TestimoniesWrapper } from "./styles";
import Link from "@/components/Links";
import { SliderOptions, withSlider } from "@/components/Slider";
import TesimonyCard from "./elements/TesimonyCard";
import { BREAKPOINTS } from "@/theme/base";
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
    </TestimoniesWrapper>
  );
};

export default TestimoniesView;
