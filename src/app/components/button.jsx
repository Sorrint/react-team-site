import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, onClick, border, content, arrow = false }) => {
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
            <button
                className={arrow ? `group ${btnStyle()}` : btnStyle()}
                onClick={onClick}
            >
                {content}
                {arrow && (
                    <span className="group-hover:rotate-90 duration-300">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 20 20"
                            className="ml-3 "
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </span>
                )}
            </button>
        </>
    );
};
Button.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func,
    border: PropTypes.string,
    content: PropTypes.string,
    arrow: PropTypes.boolean
};
export default Button;
