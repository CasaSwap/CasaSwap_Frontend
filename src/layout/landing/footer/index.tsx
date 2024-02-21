import React from "react";
import LinkView from "./elements/links";
import CopyRightView from "./elements/copyrights";

const Footer = () => {
  return (
    <footer>
      <LinkView />
      <CopyRightView />
    </footer>
  );
};

export default React.memo(Footer);
