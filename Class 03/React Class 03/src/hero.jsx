// import "./hero.css";
import React from "react";
import style from "./hero.module.css";

function Hero() {
  return (
    <>
      {/* Intentionally wrtie below 2 statements */}

      {/* <h1>Welcome to Hero Section</h1> */}
      {/* <h1 className="hero">Welcome to Hero Section</h1> */}
      
      <h1 className={style.title}>Welcome to Hero Section</h1>
    </>
  );
}

export default Hero;
