import React from "react";
import "./button.scss";

function button(props) {
  return (
    <button onClick={props.press} className="btn-main">
      <a href={props.link}>
        <div className="button-container">
          <div className="box-1">
            <div className="btn btn-one">
              <span>{props.name}</span>
            </div>
          </div>
        </div>
      </a>
    </button>
  );
}

export default button;
