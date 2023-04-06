import React from "react";
import '../css/Button.css';

function Button( props )
{
    const isOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    };
    return (
        <div className={`boton-contenedor ${isOperator(props.children) ? 'operador': null}`.trimEnd()}
        onClick={() => props.handleClick(props.children)}
        >
          {props.children}
        </div>
    );
}

export default Button;