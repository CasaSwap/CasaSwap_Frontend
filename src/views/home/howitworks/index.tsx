import React from "react";
import Link from "@/components/Links";
import { Text } from "@/components/Text";
import { Image } from "@/components/Image";
import { Flex, Grid } from "@/components/Box";
import { Button } from "@/components/Button";

import SignUpImg from "@/assets/home/how-it-works-sign-up.svg";
import HomeImg from "@/assets/home/how-it-works-home.svg";
import ExchangeImg from "@/assets/home/how-it-works-exchange.svg";
import MembershipImg from "@/assets/home/how-it-works-membership.svg";
import { HowWorkSection, StepNumber, Stepwrapper } from "./styles";

const steps = [
  {
    step_img: SignUpImg,
    title: "Sign Up Free",
  },
  {
    step_img: HomeImg,
    title:
      "Complete and verify your profile to introduce yourself to the community",
  },
  {
    step_img: MembershipImg,
    title:
      "Pay the annual membership fee of $220 and access all our features and benefits",
  },
  {
    step_img: ExchangeImg,
    title:
      "Enjoy 12 months of unlimited exchanges with peace of mind thanks to our guarantees",
  },
];

const HowWorks = () => {
  return (
    <HowWorkSection>
      <Text as="h2" mb={10}>
        How does it work?
      </Text>
      <Text mb={35}>
        Sign up and take the membership to get one year of unlimited, worry-free
        exchanges for the price of one night’s stay at a hotel.
      </Text>
      <Grid gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]}>
        {steps.map((step, idx) => (
          <Stepwrapper key={`step_${idx}`}>
            <StepNumber>
              <span>{idx + 1}</span>
            </StepNumber>
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              flex={1}
            >
              <Image src={step.step_img} alt="" />
              <Text fontSize={18} textAlign="center" mt="20px">
                {step.title}
              </Text>
            </Flex>
          </Stepwrapper>
        ))}
      </Grid>
      <Flex
        flexDirection="column"
        alignItems="center"
        m={["25px  0 35px", "25px  0 35px", "45px 0 92px"]}
      >
        <Button maxWidth="342px" width="100%" mb={30}>
          Sign up
        </Button>
        <Link>
          <Text tDecorations="underline" color="primary">
            Learn more about the annual membership
          </Text>
        </Link>
      </Flex>
    </HowWorkSection>
  );
};

export default HowWorks;
