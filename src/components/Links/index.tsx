import React, { useMemo } from "react";
import NextLink from "next/link";
import { getLink } from "@/utils/helper-links";
import { LinkItemProps } from "./type";

const InternalLink: React.FC<React.PropsWithChildren<LinkItemProps>> = ({
  children,
  href = "",
  newTab,
  ...props
}) => {
  const linkHref = useMemo(() => getLink(href), [href]);

  return (
    <NextLink
      href={linkHref}
      {...props}
      target={newTab ? "_blank" : "_self"}
      rel="noreferrer"
    >
      {children}
    </NextLink>
  );
};

const Link = React.memo(InternalLink);
export default Link;
