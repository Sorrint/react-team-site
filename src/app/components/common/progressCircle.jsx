import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const ProgressCircle = ({ value, name, color = "white" }) => {
    const progressRef = useRef(null);
    useEffect(() => {
        progressRef.current.style.width = `${(value / 100) * 15}rem`;
        progressRef.current.style.backgroundColor = color;
        progressRef.current.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    }, [value]);
    return (
        <>
            <div className="wrapper-progress text-lg">
                <div className="container-circle__full">
                    {name}

                    <div
                        className={`container-circle__value`}
                        ref={progressRef}
                    ></div>
                    {name}
                </div>
            </div>
        </>
    );
};

ProgressCircle.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
    type: PropTypes.string
};
export default ProgressCircle;
