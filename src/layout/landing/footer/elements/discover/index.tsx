import React from "react";
import { Text } from "@/components/Text";
import { Image } from "@/components/Image";
import { Container } from "@/components/Box";
import LogoImg from "@/assets/logo.png";
import DiscoverImg from "@/assets/discover.jpg";
import { CtaWrapper, DiscoverSection } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Discover = () => {
  return (
    <Container>
      <DiscoverSection justifyContent="space-around" alignItems="center">
        <Image
          src={LogoImg}
          width={100}
          height={100}
          priority={true}
          alt="logo"
        />
        <Image
          src={DiscoverImg}
          fill
          priority={true}
          alt="discover"
          className="discover-bg"
        />
        <Text width={[340, 474]} color="white" fontSize={[21]}>
          Introducing HomeExchange Collection, our community of luxury
          homeowners around the world.
        </Text>
        <CtaWrapper>
          <Text fontSize={[19, 24]} fontWeight={700}>
            Discover <br />
            Collection
          </Text>
          <Text fontSize={[19, 24]} fontWeight={700}>
            <FontAwesomeIcon icon={faArrowRightLong} color="primary" />
          </Text>
        </CtaWrapper>
      </DiscoverSection>
    </Container>
  );
};

export default Discover;
