import { StaticImageData } from "next/image";
import { Text } from "@/components/Text";
import { Image } from "@/components/Image";
import { Box, BoxProps } from "@/components/Box";

export interface InspriationProps extends BoxProps {
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

const Inspriation: React.FC<InspriationProps> = ({
  small = false,
  img_url,
  header,
  desc,
  ...rest
}) => {
  return (
    <Box {...rest} className="inspriationCard">
      <Image src={img_url} data-small={small} alt="inspriation"></Image>
      <Box minHeight={110} pt={16}>
        <Text as="h3" mb={10}>
          {header}
        </Text>
        <Text mb={10}>{desc}</Text>
      </Box>
    </Box>
  );
};
export default Inspriation;
