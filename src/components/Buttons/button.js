import React from "react";
import { Button as Btn } from 'reactstrap';

const Button = (props) => {
  return (
    <div>
      {" "}
      <Btn
        outline
        color="primary"
        size="lg"
        active
        className="btn form-control"
        onClick={props.onClick}
      >
        Log in{" "}
      </Btn>
      <Btn outline color="info" size="lg">
        Registration
      </Btn>{" "}
    </div>
  );
};
export default Button;
