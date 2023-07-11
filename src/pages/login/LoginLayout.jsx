import React, { useState } from "react";
import LoginRegistration from "./Sigin";
import Registration from "./Registration";
import "./login.scss"
import "./login.css"

export const LoginLayout = () => {
  const [logOrRed, useLogOrReg] = useState(false)
  


  return(<div className="login">
     {logOrRed ? <Registration useLogOrReg={useLogOrReg} /> : <LoginRegistration useLogOrReg={useLogOrReg} />}
    </div>)
};

export default LoginLayout;