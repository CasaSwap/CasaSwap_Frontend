import React from "react";
import { Image } from "@/components/Image";
import { Text } from "@/components/Text";
import { CheckIcon } from "@/components/Svg";
import { Flex } from "@/components/Box";

import {
  HouseImageWrapper,
  AvatarWrapper,
  Badge,
  UserAvatar,
  CardWrapper,
  LinkWrapper,
  InfoWrapper,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faStar, faHouse } from "@fortawesome/free-solid-svg-icons";
const HouseCard = () => {
  return (
    <CardWrapper>
      <HouseImageWrapper>
        <Image
          src="/assets/room1.jpg"
          width={260}
          height={146}
          alt="House Image"
        />
        {/* <div>favourite</div> */}
        <AvatarWrapper>
          <UserAvatar src="/assets/user1.jpg" width={60} height={60} />
          <Badge src="/assets/badge-8.svg" width={38} height={38}></Badge>
        </AvatarWrapper>
      </HouseImageWrapper>
      <InfoWrapper>
        <Flex>
          <CheckIcon width={24} />
          <LinkWrapper>
            <Text fontWeight={700}>
              Modern European Style Manhattan Apartment
            </Text>
          </LinkWrapper>
        </Flex>
        <Text fontSize={14}>Manhattan, United States</Text>
        <Flex justifyContent="space-between">
          <Flex>
            <Text color="#f7a800" fontSize={12} mr={2}>
              <FontAwesomeIcon icon={faStar} /> 5
            </Text>
            <Text color="#a7a7a7" fontSize={12} mr={2}>
              <FontAwesomeIcon icon={faHouse} /> 21
            </Text>
            <Text color="#a7a7a7" fontSize={12}>
              <FontAwesomeIcon icon={faUser} /> 3
            </Text>
          </Flex>
          <Text fontWeight={700}>103 GP/night</Text>
        </Flex>
      </InfoWrapper>
    </CardWrapper>
  );
};

export default HouseCard;
