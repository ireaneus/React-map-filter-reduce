import React from "react";

function Entry(props) {
  return (
    <div>
      <h2>{props.album}</h2>
      <h3>{props.description}</h3>
      <p>{props.year}</p>
      <a href="{props.path}{props.name}">{props.name}</a>
    </div>
  );
}
export default Entry;
