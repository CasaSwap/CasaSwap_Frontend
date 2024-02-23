import React from "react";
import { Text } from "@/components/Text";
import { Image } from "@/components/Image";
import { Box, Flex } from "@/components/Box";
import { Button } from "@/components/Button";
import { SliderOptions, withSlider } from "@/components/Slider";
import BlogDiscoverImg from "@/assets/home/blog-discover-our-blog.webp";
import BlogCard from "./elements/BlogCard";
import { BlogSection, BlogSliderWrapper, CardDesk } from "./styles";

const options: SliderOptions = {
  speed: 600,
  slidesPerView: "auto",
  spaceBetween: 10,
  freeMode: true,
};

const BlogSlider = withSlider(BlogCard, options);
const data = [0, 0, 0, 0];
const BlogView = () => {
  return (
    <BlogSection p="60px 0">
      <Flex
        justifyContent={"center"}
        alignItems={["center", "center", "initial"]}
      >
        <CardDesk>
          <BlogCard />
        </CardDesk>
        <Box m="0 30px" position="relative">
          <Flex
            flexDirection="column"
            alignItems="center"
            maxWidth={468}
            width="100%"
          >
            <Image src={BlogDiscoverImg} width={468} height={256}></Image>{" "}
            <Text as="h2" m="20px 0 10px">
              Blog
            </Text>
            <Text
              mb={30}
              color="grey"
              textAlign="center"
              fontSize={14}
              p="0 40px"
            >
              Check out our blog and discover our member experiences & opinions,
              traveling ideas, best home exchange practices, and updates about
              the website
            </Text>
            <Button variant="outline" scale="sm" width={210} mb={20}>
              Show more
            </Button>
          </Flex>
          <Flex
            position="absolute"
            bottom={0}
            justifyContent="space-between"
            width="100%"
            className="middle-card"
          >
            <BlogCard small />
            <BlogCard small />
          </Flex>
        </Box>
        <CardDesk>
          <BlogCard />
        </CardDesk>
      </Flex>
      <BlogSliderWrapper>
        <BlogSlider
          sliderData={data}
          itemOptions={{ small: true }}
        ></BlogSlider>
      </BlogSliderWrapper>
    </BlogSection>
  );
};

export default BlogView;
