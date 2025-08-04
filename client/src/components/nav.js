import React from "react";
import "./nav.css";

function Nav(){
    return(
        <>
       <header>
  <h1>MediCare</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/Appointment">Book Appointment</a>
    <a href="/Docters">Doctors</a>
  </nav>
</header>

        </>
    );
}

export default Nav;