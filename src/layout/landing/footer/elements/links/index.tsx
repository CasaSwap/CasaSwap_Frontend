import React from "react";
import { Flex } from "@/components/Box";
import { Text } from "@/components/Text";
import { Image } from "@/components/Image";
import Link from "@/components/Links";
import CorporationLogo from "@/assets/cert-logo.png";
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
} from "@/components/Svg";
import {
  LinkSectionWrapper,
  LinkGridWrapper,
  LinkItem,
  LinkGroup,
  LocalGroup,
} from "./styles";
import { menuLinks } from "./data";

const Links = () => {
  return (
    <LinkSectionWrapper>
      <LinkGridWrapper>
        {menuLinks.map((item, idx) => (
          <LinkGroup key={`link_${idx}`}>
            <Text mb={"5px"} fontSize={16} fontWeight={700}>
              {item.header}
            </Text>
            {item.links.map((link, link_idx) => (
              <LinkItem key={`link_${idx}_${link_idx}`}>{link.title}</LinkItem>
            ))}
          </LinkGroup>
        ))}
      </LinkGridWrapper>
      <LocalGroup>
        <Text mb={"5px"} fontSize={16} fontWeight={700} m="0 0 20px ">
          Follow Us
        </Text>
        <Flex mb="50px" justifyContent={["center", "start"]}>
          <Link>
            <FacebookIcon />
          </Link>
          <Link>
            <TwitterIcon />
          </Link>
          <Link>
            <PinterestIcon />
          </Link>
          <Link>
            <InstagramIcon />
          </Link>
        </Flex>
        {/* <Text
          mb={"5px"}
          fontSize={16}
          fontWeight={700}
          textAlign="right"
          m="30px 0 20px "
        >
          Currency
        </Text>
        <Flex>lanuage currency</Flex> */}
        <Image src={CorporationLogo} width={258} height={130} alt="logo" />
      </LocalGroup>
    </LinkSectionWrapper>
  );
};

export default React.memo(Links);
