// @to-check
import React from "react";
import Image from "next/image";
import {
  ImageProps,
  // ImagePlaceholderProps
} from "./types";
// styeld component
import {
  // ImageWrapper,
  // ImageInner,
  // EmptyImage,
  ImageNormalWrapper,
} from "./Image.style";
// import { isEmpty } from "lodash";
// ----------------------------------------------------
const ImageComponent: React.FC<ImageProps> = ({
  src = "",
  alt = "No Image, Please reload.",
  width,
  height,
  fill = false,
  quality = 75,
  priority = false,
  loadOption,
  className,
  ...props
}) => {
  // if (isEmpty(src)) {
  //   return <EmptyImage style={{ width: width, height: height }}></EmptyImage>;
  // }

  return (
    <ImageNormalWrapper className={className}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        priority={priority}
        // loading={loadOption}
        {...props}
      />
    </ImageNormalWrapper>
  );
};
export default React.memo(ImageComponent);
