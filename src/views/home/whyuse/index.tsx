import React from "react";
import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { Flex } from "@/components/Box";
import { Video } from "@/components/Video";
import { EarthIcon, PiggyBankIcon, YogaManIcon } from "@/components/Svg";
import { AdvantageCardWrapper, VideContainer, WhySection } from "./styles";

const advantages = [
  {
    icon: <EarthIcon />,
    title: "For renters & owners",
    desc: "In home or apartment, owner or renter, home exchange is for everyone!",
  },
  {
    icon: <PiggyBankIcon />,
    title: "Travel & save",
    desc: "Unlimited travels during 12 months for the price of a hotel night thanks to our annual membership.",
  },
  {
    icon: <YogaManIcon />,
    title: "With foolproof guarantees",
    desc: "Leave with peace of mind: our guarantees protect your exchanges and your home against the unexpected.",
  },
];

const WhyUseView = () => {
  return (
    <WhySection id="whyuse">
      <Text as="h2" mb={10}>
        Home exchange in 39 seconds
      </Text>
      <Text mb={35}>
        Thinking of swapping your cozy little nest for the holidays? Find out
        all about it!
      </Text>

      <Flex flexDirection={["column", "column", "row"]}>
        <div>
          {advantages.map((item, idx) => (
            <AdvantageCardWrapper key={`advantage_${idx}`}>
              {item.icon}
              <Text as="h3">{item.title}</Text>
              <Text>{item.desc}</Text>
            </AdvantageCardWrapper>
          ))}
        </div>
        <VideContainer alignItems="center">
          <Video
            width={688}
            media="/videos/conviction/MASTER_CONVICTION_en.mp4"
          ></Video>
        </VideContainer>
      </Flex>

      <Flex
        justifyContent="center"
        m={["25px  0 35px", "25px  0 35px", "45px 0 92px"]}
      >
        <Button maxWidth="342px" width="100%">
          Sign up
        </Button>
      </Flex>
    </WhySection>
  );
};

export default WhyUseView;
