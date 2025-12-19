import React from "react";
import { useState } from "react";

const SignUp = () => {
  const [email1, setEmail] = useState("");
  const [password1, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);

  const handleFormSub = async(e) => {
    e.preventDefault();
    console.log("Form Submitted");
    setIsLoading(true);
    setError(null);

    try {
        const res = await fetch("https://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({ email, password }),
        body: JSON.stringify({ 
          email: email1, // key and value both are same but value is one which is fiber node currently 
          password: password1 }),
      })
      console.log("Response:", res);
      const recData = res.json();
      console.log("Received Data:", recData);
      if(!res.ok){
        throw new Error(recData.message || "user has not registered yet");
      }
      console.log("User signed up successfully:", recData);
      alert("User signed up successfully!");
      setEmail("")
      setPassword("")
    
    }
    catch (error) {
        console.log("Error:", error.message);
        setError(error.message);
    }
    finally{
        setIsLoading(false);
    }
  }};
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
            value={email1}
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
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <p>{error} && <span>{error}</span></p>
        <button type="submit" disabled={!email || !password || isLoading}>
          {/* Sign Up */}
          {isLoading ? "Signing Up ..." : "Sign Up"}
        </button>
      </form>
    </>
  );

export default SignUp;
