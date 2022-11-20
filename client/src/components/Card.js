import React from "react";
import Wrapper from "../assets/wrappers/Card";

const Card = (props) => {
  return (
    <Wrapper>
      <div className="cardContainer">{props.children}</div>
      {props.footer}
    </Wrapper>
  );
};

export default Card;
