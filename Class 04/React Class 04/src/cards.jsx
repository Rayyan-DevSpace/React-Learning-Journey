import React from 'react';
import './cards.css';

const Card = (Props) => {
  return (
    <>
      {/* <div className="card">
        <h2 className="name">M. Rayyan Shehzad </h2>
        <h3 className="role">AI Engineer </h3>
        <p className="des">I'm dedicated AI engieer. </p>
      </div> */}
      <div className="card">
        <h2 className="name">{Props.name}</h2>
        <h3 className="role">{Props.role}</h3>
        <p className="des">{Props.para}</p>
        <button className="btn">Read More</button>
      </div>
    </>
  );
};

export default Card;