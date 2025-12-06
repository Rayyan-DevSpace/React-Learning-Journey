import React from 'react';

import { useState } from 'react';

const Counter = () => {

    const [count1 , setCount1] = useState(0);

    const increase = () => {
        setCount1(count1 + 1);
    }

    return (
        <>
        <h1>counter</h1>
        <button onClick={increase}>Increase</button>
        </>
    )
}

export default Counter;



// const [count1, setCount1] = useState(0);

// const useState = (a) => {
//   count = a;
  
//   return [count, setCount];
// };

// useState(0);
// setCount1(1);





// const [count1, setCount1] = useState(0);


// const useState = (initialValue) => {
//   let count = initialValue;

//   const setCount = (newValue) => {
//     count = newValue; // pretend React updates its memory
//   };

//   return [count, setCount];
// };

// useState(0);
// setCount1(1);














// useState(0);

  // const [count1, setCount1] = useState("Rayyan");

    // const increase = () => {
    //   setCount1("Muhammad Rayyan");
    // };