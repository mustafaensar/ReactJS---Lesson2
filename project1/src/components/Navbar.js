import React from "react";
import reactlogo from "../images/react-icon-small.png"
import "./Navbar.css";

export default function Navbar(){
    return(
        <nav>
            <img src={reactlogo} alt="reactlogo" className="nav--icon"/>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project1</h4>
        </nav>
    )
}

// we can also export like this.
// export default Navbar;