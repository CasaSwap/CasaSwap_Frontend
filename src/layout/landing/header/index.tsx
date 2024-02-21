import React, { useState } from "react";
import { Flex } from "@/components/Box";
import { Text } from "@/components/Text";
import { Image } from "@/components/Image";
import { Button } from "@/components/Button";
import InternalLink from "@/components/Links";
import { DollorIcon, HamburgerIcon } from "@/components/Svg";
import { useScrollEvent } from "@/hooks/useScrollEvent";
import LogoImg from "@/assets/logo.png";
// import { useSideBar } from "@/hooks";
import { CtaWrapper, LogoWrapper, MobileCtaWrapper, NavBar } from "./styles";

const LandingHeader = () => {
  const [isPined, setIsPined] = useState(false);
  // const { currentBar, openBar } = useSideBar();

  const handleShow = (pos) => {
    if (pos < -40) {
      if (!isPined) setIsPined(true);
    } else {
      if (isPined) setIsPined(false);
    }
  };

  // const onOpenMenu = () => {
  //   openBar("menu");
  // };

  useScrollEvent("whyuse", handleShow, 0);

  return (
    <header>
      <NavBar
        justifyContent="space-between"
        alignItems="center"
        data-pin={isPined}
      >
        <Flex m="0 15px">
          <LogoWrapper>
            <Image
              src={LogoImg}
              width={53}
              height={53}
              priority={true}
              alt="logo"
            />
            <Text color="primary" fontSize={["32px", "40px"]} fontWeight={700}>
              Casa Swap
            </Text>
          </LogoWrapper>
          {/* <div>where are you going</div> */}
        </Flex>

        <CtaWrapper alignItems="center">
          <InternalLink>
            <Text p="15px 10px" display="flex" alignItems="center">
              <DollorIcon />{" "}
              <Text as="span" display={["none", "none", "inline-block"]}>
                How much doesit cost?
              </Text>
            </Text>
          </InternalLink>
          <InternalLink>
            <Text p="15px 10px">How it works</Text>
          </InternalLink>
          <InternalLink>
            <Text p="15px 10px">Sign In</Text>
          </InternalLink>
          <InternalLink>
            <Button scale="sm" m="0 15px">
              Sign up for free
            </Button>
          </InternalLink>
        </CtaWrapper>
        <MobileCtaWrapper>
          <HamburgerIcon
          // onClick={onOpenMenu}
          />
        </MobileCtaWrapper>
      </NavBar>
    </header>
  );
};

export default React.memo(LandingHeader);
