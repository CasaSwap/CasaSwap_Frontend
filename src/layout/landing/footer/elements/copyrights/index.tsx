import React from "react";
import { Flex } from "@/components/Box";
import { Text } from "@/components/Text";
import { getThisYear } from "@/utils/helper";
import { LinkItem, CopyRightWrapper } from "./styles";

const footerLinks = [
  {
    title: "Terms of Use",
    url: "/",
  },
  {
    title: "Privacy Policy",
    url: "/",
  },
  {
    title: "Our cookies",
    url: "/",
  },
  {
    title: "Lega notice",
    url: "/",
  },
  {
    title: "Site Map",
    url: "/",
  },
];

const Links = () => {
  return (
    <CopyRightWrapper flexWrap={["wrap", "wrap", "nowrap"]}>
      <Flex flexWrap="wrap" mb={10}>
        {footerLinks.map((item, idx) => (
          <LinkItem key={`footer_${idx}`} href={item.url}>
            {item.title} {footerLinks.length !== idx + 1 && <span>|</span>}
          </LinkItem>
        ))}
      </Flex>
      <Text color="white" fontSize={12} marginLeft={["auto", "auto", 0, 0]}>
        Copyright © {getThisYear()} | HomeExchange | All rights reserved
      </Text>
    </CopyRightWrapper>
  );
};

export default React.memo(Links);
