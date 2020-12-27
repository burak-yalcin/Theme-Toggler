import React, {useState} from "react";


import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import LIBRARY_DB from "../data/LIBRARY_DB";

export default function Home({theme}) {

  return (
    <div>
      <Jumbotron theme={theme} />

      <div className={`row ${theme.bgColor}`}>
        <div className="row mt-5 justify-content-center text-center">
          {LIBRARY_DB.map(item => (
            <Card
              title={item.title}
              content={item.content}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
