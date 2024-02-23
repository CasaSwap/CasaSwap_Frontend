import GettyImages1 from "@/assets/home/GettyImages1.jpg";
import GettyImages2 from "@/assets/home/GettyImages2.jpg";
import GettyImages3 from "@/assets/home/GettyImages3.jpg";
import GettyImages4 from "@/assets/home/GettyImages4.jpg";
import GettyImages5 from "@/assets/home/GettyImages5.jpg";
import GettyImages6 from "@/assets/home/GettyImages6.jpg";
import { InspriationType } from "./elements/BlogCard";

const data: InspriationType[] = [
  {
    header: "Homes with swimming pool",
    desc: "Beautiful pools to cool off and feel like a vacation every day",
    img_url: GettyImages1,
  },
  {
    header: "Home with outdoor space",
    desc: "Get some fresh air in the garden, on the terrace, or on the balcony of your host's home",
    img_url: GettyImages2,
  },
  {
    header: "Homes with a bicycle",
    desc: "Enjoy a home with available bikes to explore your surroundings",
    img_url: GettyImages3,
  },
  {
    header: "Homes with BBQ",
    desc: "To enjoy good grilled food this summer",
    img_url: GettyImages4,
  },
  {
    header: "Pet friendly homes",
    desc: "Travel with your pets",
    img_url: GettyImages5,
  },
  {
    header: "Kid friendly homes",
    desc: "Travel with peace of mind with your family",
    img_url: GettyImages6,
  },
];
export default data;
