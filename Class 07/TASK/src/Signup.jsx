import React from "react";
import "./Signup.css";
import { useState } from "react";





const Signup = () => {

    const [username, setUsername] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const [terms, setTerms] = useState(false);

    const handleFormSub = (e) => {
        
        e.preventDefault();
        console.log("Form submitted:", { username, email, password });

        setIsLoading(true);

    }


    return (
      <div className="main">
        <h2>Sign-Up Account</h2>
        <form onSubmit={handleFormSub}>
          <div className="field01">
            <label htmlFor="username">Username:</label>
            <br />
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="field01">
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field01">
            <label htmlFor="password">Password:</label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="field02" >
            <input
              type="checkbox"
              name="terms"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
            <label htmlFor="terms">
              agree to <span>terms</span> and <span>conditions</span>
            </label>
          </div>

          <br />
          <button
            type="submit"
            disabled={!username || !email || !password || !terms || isLoading}
          >
            {isLoading ? "Loading..." : "Signup"}{" "}
          </button>
        </form>
      </div>
    );
}
export default Signup;
