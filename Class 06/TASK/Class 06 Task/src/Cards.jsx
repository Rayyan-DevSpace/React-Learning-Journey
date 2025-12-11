import React from "react";
import "./Cards.css";

const Cards = (props) => {
    return (
      <div className="card">
        <img src={props.image} alt="Profile Picture" className="cardImg" />
        <div className="cardInfo">
          <h2 className="name">Name: {props.name}</h2>
          <div className="bio">
            <p>Age: {props.age}</p>
            <p>Highest Qualification: {props.qualification} </p>
          </div>
        </div>
      </div>
    );
}

export default Cards;