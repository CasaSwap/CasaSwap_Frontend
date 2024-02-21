import { NavigationOptions, SwiperOptions } from "swiper/types";
// -----------------------------------------

export interface SliderProps<T> {
  sliderData?: Array<T>;
  itemOptions?: any;
  navigationOptions?: NavigationOptions | boolean;
}

export type SliderOptions = SwiperOptions;
