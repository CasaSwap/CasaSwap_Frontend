import { StaticImageData } from "next/image";

// -----------------------------------------------
export interface ImageProps {
  src?: StaticImageData | string;
  alt?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  quality?: string | number;
  loadOption?: "lazy" | "eager" | undefined;
  priority?: boolean;
  [key: string]: any;
}
export interface ImagePlaceholderProps {
  placeholder?: "empty" | "blur";
  blurDataURL?: string;
}

export type ImageType = StaticImageData | string;
