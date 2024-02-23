import { StaticImageData } from "next/image";
import { Text } from "@/components/Text";
import { Image } from "@/components/Image";
import { BoxProps } from "@/components/Box";

import BlogImage from "@/assets/home/blog-destinations.webp";
import { BlogCardWrapper, ContentWrapper } from "./styles";

export interface BlogCardProps extends BoxProps {
  small?: boolean;
  img_url: string | StaticImageData;
  header: string;
  desc: string;
}

export type InspriationType = {
  img_url: string | StaticImageData;
  header: string;
  desc: string;
};

const BlogCard = ({
  small = false,
  // img_url,
  // header,
  // desc,
  ...rest
}) => {
  return (
    <BlogCardWrapper {...rest} className="blogcard">
      <Image src={BlogImage} alt="BlogCard" data-small={small}></Image>
      <ContentWrapper>
        <Text
          as="h3"
          mb={10}
          color="white"
          fontSize={23}
          fontWeight={600}
          lineHeight={1.2}
        >
          Destinations
        </Text>
        <Text mb={20} color="white" className="desc">
          Be inspired with travel tips on our favorite destinations
        </Text>
      </ContentWrapper>
    </BlogCardWrapper>
  );
};
export default BlogCard;
