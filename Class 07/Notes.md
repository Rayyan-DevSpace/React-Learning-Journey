put dot in project name if you want to make react app in current folder other wise it wil create a new folder


we design the signup page

so if we click on submit button then the page refresh hota ha
so browser will recreate all the components

so first issue we want to avoid this refrsh

pure javascript is writen before return 
in side return we wrtie htmlcode etc


well refresh behavoiur is eliminated by this

    const handleFormSub=(e)=>{
        e.preventDefault();
        console.log("Form Submitted");
    }
    return(
        <>
        <form onSubmit={handleFormSub}
        </>
    )

    now if i use usestate then input field is locked 


    if we use value={email}
    then it will lock

    import React from "react";
import { useState } from "react";


const SignUp =  ()=>{

    const [email,setEmail]=useState("abc@gmail.com");
    // const [password,setPassword]=useState("abc123#");

    const handleFormSub=(e)=>{
        e.preventDefault();
        console.log("Form Submitted");
    }
    return(
        <>
        <form onSubmit={handleFormSub}>  {/* we call functions inside {} */}
            <div className="emailSec">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value={email}  placeholder="Enter your email" required />
            </div>
            <div className="passwordSec">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" placeholder="Enter your password" required />
            </div>
        </form>
        </>
    )
}

export default SignUp;



but you cannot change the email it gets from usestate 

so to make the change you need to add this 

after the value={email} 

onChange={(e)=>(e.target.value)}


now to make sure if user didn't enter email so he cant submit
or if cant enter pasword then also can't submit

so that's why we can track the changes by onChange

if i don't use it we can't even read the obbject giving us info in browser


let say 
email= abc@gmail.com

update
email = rayyan@gmail.com

so updates are not directly done
we use setEmail function so

onChange={(e)=>setEmail(e.target.value)}



so in react target capture as we add sigle character we enter

like email : a
b
c
@
G
m
a
i
l
.
c
o
m
this way but in vanilla javascript it doesn't happen so
as there const email = documment.getElementById("email")
email.innerHTML = <p>abc@gmail.com</p>



<button type="submit" disabled={!email}></button>

so we use this to keep it necessary instead if using required attribute

so the concept is this let say if there was no required attribute in html so for such thing where functionality lacks we use this disabled



    <button type="submit" disabled={!email || !password}>
            Sign Up
          </button>

          now let say if i eneter data and clicked the button sign up

          so while it is loading make the button disable
          so it will disaable in 3 conditions 
          like if !email
          if!password
          if!isloading


          so use setIsLoading in handleFormSub
        to true so that initially it was false when not clicked on submit
        but once we click on submit it becomes true and the button disable