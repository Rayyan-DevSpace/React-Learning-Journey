import React from 'react';

import { useState } from 'react';

// const Counter = () => {

//     const [count1 , setCount1] = useState(0);

//     const increase = () => {
//         setCount1(count1 + 1);
//     }
//      const decrease = () => {
//        setCount1(count1 - 1);
//      };
//       const reset = () => {
//         setCount1(0);
//       };
//     return (
//         <>
//         <h1>counter</h1>
//         <h2>{count1}</h2>
//         <button onClick={increase}>Increase</button>
//         <button onClick={decrease}>Decrease</button>
//         <button onClick={reset}>Reset</button>
//         </>
//     )
// }

// export default Counter;


const info = () => {

    const [name , setName] = useState("Ali");// if we taking input from user then we have to set initial value as ""
    const [age, setAge] = useState("20");// if we taking number from user then we have to set initial value as 0
    const [city, setCity] = useState("Bhoun");

    setName("Rayyan");
    setAge(21);
    setCity("Chakwal");
    return (
        <></>
    )
}