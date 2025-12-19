import React from "react";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h2>Login Page</h2>
      <p>Don't have an account? <Link to="/signup"> Sign Up </Link></p>
    </div>
  );
}

export default Login;