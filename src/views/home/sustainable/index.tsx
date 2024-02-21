import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "@/components/Links";
import { Text } from "@/components/Text";
import { Image } from "@/components/Image";
import { Container, Flex } from "@/components/Box";
import { Button } from "@/components/Button";
import {
  DescWrapper,
  GreenSection,
  SustainableSection,
  ToursimButton,
} from "./styles";
import BcropLogo from "@/assets/home/en_bcorp_logo.svg";
import BcropImg from "@/assets/home/en_bcorp_illustration_desktop.svg";
import BcropMobileImg from "@/assets/home/en_bcorp_illustration_mobile.svg";

const Sustainables = () => {
  const [current, setCurrent] = useState(0);
  return (
    <>
      <SustainableSection>
        <Text as="h2" mb={10}>
          Home exchange for a sustainable getaway
        </Text>
        <Text mb={35}>Connecting people, travel, and the planet.</Text>
      </SustainableSection>
      <GreenSection>
        <Container position="relative" p="74px 0">
          <Text fontSize={[38, 50]} fontWeight={700} mb={10}>
            <TypeAnimation
              sequence={[
                "More human",
                () => {
                  setCurrent(2);
                },
                1500,
                () => {
                  setCurrent(0);
                },
                "More respectful",
                () => {
                  setCurrent(3);
                },
                1500,
                () => {
                  setCurrent(0);
                },
                "More cost-efficient",
                () => {
                  setCurrent(1);
                },
                1500,
                () => {
                  setCurrent(0);
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </Text>
          <DescWrapper>
            <Text data-show={current === 1}>
              Free hospitality that creates bonds between members and fosters
              respect for the local people
            </Text>
            <Text data-show={current === 2}>
              Limit our impact on the environment by avoiding mass tourism and
              its negative consequences
            </Text>
            <Text data-show={current === 3}>
              Save on vacation accommodations and support the local economy
            </Text>
            <Button maxWidth="342px" width="100%" m="90px 0 0">
              Choose sustainable tourism
            </Button>
          </DescWrapper>
          <Image
            className="bcroImage"
            src={BcropImg}
            alt="bcro image"
            width={684}
            height={437}
          ></Image>
          <Image
            className="bcroMobImage"
            src={BcropMobileImg}
            alt="bcro image"
            width={489}
            height={437}
          ></Image>
        </Container>
      </GreenSection>
      <Container>
        <ToursimButton width="100%" className="mobTourismbtn">
          Choose sustainable tourism
        </ToursimButton>
        <Flex mt={45}>
          <Image src={BcropLogo} width={41} height={57} alt="logo"></Image>
          <Text fontSize={16} mb={10} ml={15} maxWidth={340}>
            We are proud to be a certified B Corp!{" "}
            <Link>
              <Text as="span" tDecorations="underline" fontWeight={600}>
                Learn more.
              </Text>
            </Link>
          </Text>
        </Flex>
      </Container>
    </>
  );
};

export default Sustainables;
