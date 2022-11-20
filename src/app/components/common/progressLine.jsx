import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const ProgressLine = ({ value, name, color }) => {
    const progressRef = useRef(null);
    useEffect(() => {
        progressRef.current.style.width = `${(value / 100) * 150}px`;
        progressRef.current.style.backgroundColor = color;
        progressRef.current.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    }, [value]);
    return (
        <>
            <div className="wrapper-progress">
                <div className={`container-line__full`}>
                    <div
                        className={`container-line__value`}
                        ref={progressRef}
                    ></div>
                </div>
                <span className=" block"> {name}</span>
            </div>
        </>
    );
};

ProgressLine.propTypes = {
    value: PropTypes.number,
    name: PropTypes.string,
    color: PropTypes.string,
    type: PropTypes.string
};
export default ProgressLine;
