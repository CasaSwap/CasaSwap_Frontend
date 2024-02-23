import React from "react";
import { Text } from "@/components/Text";
import { Container, Flex } from "@/components/Box";
import { PressSection } from "./styles";
import { Image } from "@/components/Image";
import TravelerLogo from "@/assets/home/press/Conde_Nast_Traveler_logo.svg";
import BritLogo from "@/assets/home/press/Brit-Co-correct2.svg";
import InsideHookLogo from "@/assets/home/press/InsideHook-correct.svg";
import MensjournalLogo from "@/assets/home/press/mensjournal-correct.svg";
import PeopleLogo from "@/assets/home/press/People-correct.svg";
import Link from "@/components/Links";

const PressView = () => {
  return (
    <PressSection p="60px 0">
      <Container>
        <Text
          as="h2"
          m="20px 0 10px"
          color="#65625f"
          fontSize={20}
          textAlign="center"
        >
          Read about us in:
        </Text>
        <Flex
          justifyContent={["center", "center", "space-between"]}
          flexWrap="wrap"
        >
          <Link>
            <Image src={TravelerLogo}></Image>
          </Link>
          <Link>
            <Image src={BritLogo}></Image>
          </Link>
          <Link>
            <Image src={InsideHookLogo}></Image>
          </Link>
          <Link>
            <Image src={MensjournalLogo}></Image>
          </Link>
          <Link>
            <Image src={PeopleLogo}></Image>
          </Link>
        </Flex>
      </Container>
    </PressSection>
  );
};

export default PressView;
