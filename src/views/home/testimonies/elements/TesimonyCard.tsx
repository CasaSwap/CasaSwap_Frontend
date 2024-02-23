import { Text } from "@/components/Text";
import React from "react";
import { CardWrapper, DescWapper, TestimonyInfo } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Flex } from "@/components/Box";

const Testimony = () => {
  return (
    <CardWrapper>
      <Flex mb={14}>
        <FontAwesomeIcon icon={faStar} color="primary" />
        <FontAwesomeIcon icon={faStar} color="primary" />
        <FontAwesomeIcon icon={faStar} color="primary" />
        <FontAwesomeIcon icon={faStar} color="primary" />
        <FontAwesomeIcon icon={faStar} color="primary" />
      </Flex>
      <Text color="#1d1d1d" mb="10px" fontWeight={700}>
        Easy use of app
      </Text>
      <DescWapper fontSize={13}>
        Exchanging messages between members is very friendly. Might you met
        problems, the orgnization
      </DescWapper>
      <TestimonyInfo fontSize={12} color="#1d1d1dc3">
        <Text fontWeight={700} as="span">
          Martien Lodder,
        </Text>{" "}
        6 days ago
      </TestimonyInfo>
    </CardWrapper>
  );
};

export default Testimony;
