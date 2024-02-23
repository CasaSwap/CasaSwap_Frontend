import React from "react";
import { Text } from "@/components/Text";
import { Box, Container, Grid } from "@/components/Box";
import { SliderOptions, withSlider } from "@/components/Slider";
import Inspriation, { InspriationType } from "./elements/Inspriation";
import { InspriationalSection } from "./styles";
import datas from "./data";

const options: SliderOptions = {
  speed: 600,
  slidesPerView: "auto",
  spaceBetween: 10,
  freeMode: true,
  rewind: true,
};

const InspriationSlider = withSlider<InspriationType>(Inspriation, options);

const InspriationalView = () => {
  return (
    <InspriationalSection p="60px 0">
      <Container>
        <Text as="h2" m="20px 0 10px">
          There is a home for all your desires
        </Text>
        <Text mb={47}>
          A selection of houses based on your favorite criteria, to live an
          unforgettable experience.
        </Text>

        <Grid gridTemplateColumns="1fr 1fr" className="ins_grid">
          <Box mr={30}>
            <Inspriation {...datas[0]} />
            <Grid gridTemplateColumns="1fr 1fr">
              <Inspriation small {...datas[1]} mr={15} />
              <Inspriation small {...datas[2]} ml={15} />
            </Grid>
          </Box>
          <Box>
            <Grid gridTemplateColumns="1fr 1fr">
              <Inspriation small {...datas[3]} mr={15} />
              <Inspriation small {...datas[4]} ml={15} />
            </Grid>
            <Inspriation {...datas[5]} />
          </Box>
        </Grid>
        <InspriationSlider sliderData={datas}></InspriationSlider>
      </Container>
    </InspriationalSection>
  );
};

export default InspriationalView;
