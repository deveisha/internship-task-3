import React, { useState } from "react";
import SignupContext from "./Context";

const SignupProvider = (props) => {
  const [signupData, setSignupData] = useState([]);

  const updateSignupData = (newData) => {
    setSignupData([...signupData,newData ]);
   
  };

  return (
    <SignupContext.Provider value={{ signupData, updateSignupData ,setSignupData}}>
      {props.children}
    </SignupContext.Provider>
  );
};

export default SignupProvider;