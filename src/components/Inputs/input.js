import React from "react";
import { Input as Inp } from 'reactstrap';

const Input = (props) => {
 const { type, id, placeholder } = props;
  return ( 
  <div>
    <Inp placeholder={placeholder} type={type}  id={id} />
    </div>
  );
};

export default Input;
