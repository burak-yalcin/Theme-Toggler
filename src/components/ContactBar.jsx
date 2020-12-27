import React from "react";

export default function ContactBar({theme, title, desc}) {
  return (
    <div className={`jumbotron ${theme.bgColor} ${theme.textColor}`}>
      <h1 className="display-4">{title}</h1>
      <p className="lead">
        {desc}
      </p>
      <hr className="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
   
    </div>
  );
}
