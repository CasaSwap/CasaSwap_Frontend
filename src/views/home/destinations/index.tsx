import React from "react";
import { Text } from "@/components/Text";
import { Container } from "@/components/Box";
import Link from "@/components/Links";
import { SliderOptions, withSlider } from "@/components/Slider";
import DestinationCard from "./elements/DestinationCard";
import { DestinationSliderWrapper, DiscoverSection } from "./styles";

const options: SliderOptions = {
  speed: 600,
  slidesPerView: "auto",
  spaceBetween: 30,
  freeMode: true,
};

const HouseCardSlider = withSlider(DestinationCard, options);

const data = [0, 0, 0, 0, 0, 0, 0];

const DestinationView = () => {
  return (
    <DiscoverSection p="60px 0">
      <Container>
        <Text as="h2" m="20px 0 10px">
          Discover all our destinations
        </Text>
        <Text mb={10}>Cities from near and far </Text>
      </Container>
      <DestinationSliderWrapper>
        <Container>
          <HouseCardSlider sliderData={data} />
        </Container>
      </DestinationSliderWrapper>

      <Container>
        <Text>
          Find a <strong>home exchange</strong> anywhere in the world, with{" "}
          <strong>homes to exchange</strong> in 145 countries.{" "}
          <strong>House exchange</strong> with HomeExchange allows you to
          discover the world in a more authentic way by living like a local in{" "}
          <Link href="/home-exchange-indonesia/bali-1">Bali</Link>,{" "}
          <Link href="/home-exchange-ireland">Ireland</Link>,{" "}
          <Link href="/home-exchange-greece">Greece</Link>, or{" "}
          <Link href="/home-exchange-south-africa">South Africa</Link>! Spend
          less and enjoy more when you visit far-flung cities or cozy country
          towns.
          <br /> Authentic and safe, HomeExchange helps you organize your{" "}
          <strong>vacation</strong> with ease!
        </Text>
      </Container>
    </DiscoverSection>
  );
};

export default DestinationView;
