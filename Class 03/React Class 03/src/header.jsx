    // import "./header.css";
    import React from "react";
    import style from "./header.module.css";


    function Header() {
    return (
        <>
        {/* Intentionally wrtie below 2 statements */}

        {/* <h1>Welcome to My Website</h1>  */}
        {/* <h1 className="header">Welcome to My Website</h1> */}

        <h1 className={style.title}>Welcome to My Website</h1>
        </>
    );
    }

    export default Header;
