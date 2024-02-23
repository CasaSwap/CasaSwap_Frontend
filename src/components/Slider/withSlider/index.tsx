import React, { ComponentType, PropsWithChildren } from "react";
//  Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper modules
import { Navigation, Pagination } from "swiper/modules";

// types
import { SliderProps, SliderOptions } from "../types";
// styled component
import { SliderWrapper } from "./styles";

// -----------------------------------------------------------------------------

const CommonSlider =
  <DataType = any, ItemOptionType = DataType>(
    ItemWrapper: ComponentType<DataType & ItemOptionType>,
    options: SliderOptions = {},
    SwiperWrapper: ComponentType<PropsWithChildren<any>> = SliderWrapper
  ): React.FC<PropsWithChildren<SliderProps<DataType>>> =>
  // eslint-disable-next-line react/display-name
  ({ sliderData = [], itemOptions, navigationOptions, children }) => {
    const navigation = navigationOptions
      ? { navigation: navigationOptions }
      : {};
    return (
      <SwiperWrapper className="sliderWarpper">
        <Swiper {...options} {...navigation} modules={[Navigation, Pagination]}>
          {sliderData.map((item, index) => (
            <SwiperSlide key={`bannerSlier_${index}`}>
              <ItemWrapper {...itemOptions} {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
        {children}
      </SwiperWrapper>
    );
  };

export default CommonSlider;
