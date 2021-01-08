import React, { useState } from "react";
import Inputs from "../../components/Inputs/inputs";
import Buttons from '../../components/Buttons/buttons'
import {validate} from '../../Util/validate'
import { Label, Input,  Badge  } from 'reactstrap';

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [errors , setError] = useState("");
  

  const  inseterrors =(e)=>{ 
   const newVal = e.target.value;
   setError(validate(newVal));
  setPassword(newVal);
   }


  return (
    <div>
      <form>
      <h1>Welcome <Badge color="secondary">Login Page</Badge></h1>
        <label htmlFor="email">Email</label>
        <Inputs type={"email"} id={"email"}  placeholder={"Enter email"} value={email} onChange={(e) => setEmail(e.target.value) } />
      </form>
      <form>
        <label htmlFor="password">Password</label>
        <Inputs type={"password"} id={"password"} placeholder={"Enter password"} value={password} onChange={(e) => setPassword(e.target.value)}/>
      </form>
      <p>{errors}</p>
      <Label check> <Input type="checkbox" />{' '} Remember me </Label> 
      <Buttons onClick={inseterrors}>Log In</Buttons>
       
    </div>
  );
}

export default Form;
