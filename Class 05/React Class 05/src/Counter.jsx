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


const useState = (a) => {
  count = a;
  setCount(1);

  return [count, setCount];
};








// const useState = (initialValue) => {
//     let value = initialValue;

//     const setValue = (newValue) => {
//         value = newValue;   // pretend React updates its memory
//     };

//     return [value, setValue];
// };













// useState(0);

  // const [count1, setCount1] = useState("Rayyan");

    // const increase = () => {
    //   setCount1("Muhammad Rayyan");
    // };