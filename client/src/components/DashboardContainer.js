import React from "react";
import Wrapper from "../assets/wrappers/DashboardContainer";

const DashboardContainer = (props) => {
  return (
    <Wrapper>
      <div className="cardContainer">{props.children}</div>
    </Wrapper>
  );
};

export default DashboardContainer;
