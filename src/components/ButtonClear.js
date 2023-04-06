import React from "react";
import '../css/ButtonClear.css';

function ButtonClear (props)
{
  return (
    <button className="boton-clear"
      onClick={() => props.handleClear()}
    >
      {props.children}
    </button>
  );
}

export default ButtonClear;