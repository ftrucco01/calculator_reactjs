import React from "react";
import '../css/ButtonClear.css';

function ButtonClear (props)
{
  return (
    <div className="boton-clear"
      onClick={() => props.handleClear()}
    >
      {props.children}
    </div>
  );
}

export default ButtonClear;