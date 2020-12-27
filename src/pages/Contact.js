import React, {useState} from "react";


import ContactBar from "../components/ContactBar";
import Card from "../components/Card";
import LIBRARY_DB from "../data/LIBRARY_DB";

export default function Contact({theme}) {

  return (
    <div>
      <ContactBar theme={theme} title="Contact Us" desc="to innovate with the world"/>

      <div className="container">
       
      </div>
    </div>
  );
}
