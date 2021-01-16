import React, { useState } from "react";
import Input from "../../components/Inputs/input";
import Button from '../../components/Buttons/button'
import {validate} from '../../Util/validate'
import { Label, Input as Inp,  Badge  } from 'reactstrap';

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
        <Input type={"email"} id={"email"}  placeholder={"Enter email"} value={email} onChange={(e) => setEmail(e.target.value) } />
      </form>
      <form>
        <label htmlFor="password">Password</label>
        <Input type={"password"} id={"password"} placeholder={"Enter password"} value={password} onChange={(e) => setPassword(e.target.value)}/>
      </form>
      <p>{errors}</p>
      <Label check> <Inp type="checkbox" />{' '} Remember me </Label> 
      <Button onClick={inseterrors}>Log In</Button>
       
    </div>
  );
}

export default Form;
