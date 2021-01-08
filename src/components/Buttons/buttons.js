import React from "react";
import { Button } from 'reactstrap';

const Buttons = (props) => {
  return (
    <div>
      {" "}
      <Button
        outline
        color="primary"
        size="lg"
        active
        className="btn form-control"
        onClick={props.onClick}
      >
        Log in{" "}
      </Button>
      <Button outline color="info" size="lg">
        Registration
      </Button>{" "}
    </div>
  );
};
export default Buttons;
