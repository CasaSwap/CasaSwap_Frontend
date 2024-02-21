import { informations } from "@/constant/page-seo";
import { SEO_INFO_TYPE } from "@/components/Seo";

export const getInformation = (page: string): SEO_INFO_TYPE => {
  if (informations[page]) {
    return informations[page];
  } else {
    return {
      title: "",
      description: "",
      canonical: "",
      keywords: "",
      css: "",
      image: "",
    };
  }
};
