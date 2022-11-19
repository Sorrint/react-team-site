import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, onClick, name, border, content }) => {
    const btnStyle = () => {
        if (color && border) {
            return `btn btn-${border} btn-${color}`;
        } else if (color) {
            return `btn btn-${color}`;
        } else if (border) {
            return `btn btn-${border}`;
        } else {
            return "btn";
        }
    };
    return (
        <>
            <button className={btnStyle()} onClick={onClick} name={name}>
                {content}
            </button>
        </>
    );
};
Button.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func,
    name: PropTypes.string,
    border: PropTypes.string,
    content: PropTypes.string
};
export default Button;
