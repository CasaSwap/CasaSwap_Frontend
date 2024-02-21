import React, { PropsWithChildren } from "react";

import { Seo } from "@/components/Seo";

import { getInformation } from "@/utils/seo-information";

import { PageProps } from "./types";

// --------------------------------------------------

const Page: React.FC<PropsWithChildren<PageProps>> = ({ name, children }) => {
  const props = getInformation(name);
  return (
    <>
      <Seo {...props} />
      {children}
    </>
  );
};
export default Page;
