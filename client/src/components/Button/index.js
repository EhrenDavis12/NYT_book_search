import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function DeleteBtn(props) {
  return (
    <span className="delete-btn allButtons" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export function ViewBtn(props) {
  return (
    <a href={props.url}>
      <span className="view-btn allButtons" >
        View
      </span>
    </a>
  );
}
