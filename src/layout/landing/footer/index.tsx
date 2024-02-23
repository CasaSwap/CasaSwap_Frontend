import React from "react";
import LinkView from "./elements/links";
import CopyRightView from "./elements/copyrights";
// import DiscoverView from "./elements/discover";

const Footer = () => {
  return (
    <footer>
      {/* <DiscoverView /> */}
      <LinkView />
      <CopyRightView />
    </footer>
  );
};

export default React.memo(Footer);
