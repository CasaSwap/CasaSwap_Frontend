import React from "react";
import { Text } from "@/components/Text";
import { Grid } from "@/components/Box";
import { Image } from "@/components/Image";
import GlobalIcon from "@/assets/home/why/globe.svg";
import PigyBankIcon from "@/assets/home/why/piggy-bank.svg";
import ZenBlueIcon from "@/assets/home/why/zen-blue.svg";
import { AdvantageCardWrapper, WhySection } from "./styles";

const advantages = [
  {
    icon: <Image src={GlobalIcon} width={70} height={70} />,
    title: "Over 270,000 homes",
    desc: "Travel made easy: It doesn't matter if you rent your home or own your home, everyone can organize a home exchange.  Local stays and international travel are all possible.",
  },
  {
    icon: <Image src={PigyBankIcon} width={70} height={70} />,
    title: "Unlimited travel",
    desc: "Travel without breaking the bank: Our annual membership allows you to travel as much and as long as you want for an entire year, without any additional accommodation costs!",
  },
  {
    icon: <Image src={ZenBlueIcon} width={70} height={70} />,
    title: "Reliable guarantees",
    desc: "Travel with peace of mind: Our guarantees protect your exchanges and your home, and our member service accompanies you 24 hours a day, 7 days a week before, during and after your exchanges.",
  },
];

const OldWhyView = () => {
  return (
    <WhySection id="whyuse">
      <Text as="h2" mb={10}>
        The advantages of a home exchange vacation
      </Text>

      <Grid gridTemplateColumns={["1fr", "1fr 1fr 1fr"]}>
        {advantages.map((item, idx) => (
          <AdvantageCardWrapper key={`advantage_${idx}`}>
            {item.icon}
            <Text as="h3" m="30px 0 8px">
              {item.title}
            </Text>
            <Text mb={10}>{item.desc}</Text>
          </AdvantageCardWrapper>
        ))}
      </Grid>
    </WhySection>
  );
};

export default OldWhyView;
