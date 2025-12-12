import React from "react";
import { useState } from "react";


const SignUp =  ()=>{

    const [email,setEmail]=useState("abc@gmail.com");
    const [password,setPassword]=useState("abc123#");
    const [isLoading,setIsLoading]=useState(false);

    const handleFormSub=(e)=>{
        e.preventDefault();
        console.log("Form Submitted");
        setIsLoading(true);
    }
    return (
      <>
        <form onSubmit={handleFormSub}>
          {" "}
          {/* we call functions inside {} */}
          <div className="emailSec">
            <label htmlFor="email">Email:</label>
            {/* <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                e.target.value;
              }}
              placeholder="Enter your email"
              required
            /> */}
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="passwordSec">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" disabled={!email || !password || isLoading}>

            {/* Sign Up */}
            {isLoading ? "Signing Up ...": "Sign Up"}
          </button>
        </form>
      </>
    );
}

export default SignUp;