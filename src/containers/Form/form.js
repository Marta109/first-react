import React, { useState } from "react";
import Inputs from "../../components/Inputs/inputs";
import Buttons from "../../components/Inputs/Buttons/buttons";
import {validate} from '../../Util/validate'
import { Label, Input,  Badge  } from 'reactstrap';


// class Buttonns  extends Component {
//   constructor(props){
//       super (props)
//       this.state={
//           number : 0 
//       }
//       this.number=this.number.bind(this);
//     }
//    nextNumber(){
// console.log('hi ');
//  this.setState(state =>({
//   number: ++state.number
//  }))
//    }
//    const {number} = this.state;
//        return (<div> 
//         <button   onClick={this.nextNumber}>++</button>
//        alert (number)</div>)
       
// }



const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors , setErrosr] = useState("");

  
  const onClick = (e ) =>{ 
  const newVal = e.target.value;
  setErrosr(validate(newVal).errorText);
  console.log(errors);
  console.log(validate(newVal).errorText);
   };

  return (
    <div>
      <form>
      <h1>Welcome <Badge color="secondary">Login Page</Badge></h1>
        <label htmlFor="email">Email</label>
        <Inputs type={"email"} id={"email"}  placeholder={"Enter email"} value={email} onChange={(e) => setEmail(e.target.value)} />
      </form>
      <form>
        <label htmlFor="password">Password</label>
        <Inputs type={"password"} id={"password"} placeholder={"Enter password"} value={password} onChange={(e) => setPassword(e.target.value)}/>
      </form>
      <Label check> <Input type="checkbox" />{' '} Remember me </Label> 
      <Buttons onClick={onClick}/>
    </div>
  );
}

export default Form;
