import React from "react";
import { Input } from 'reactstrap';

const Inputs = (props) => {
 const { type, id, placeholder } = props;
  return ( 
  <div>
    <Input placeholder={placeholder} type={type}  id={id} />
    </div>
  );
};

export default Inputs;
