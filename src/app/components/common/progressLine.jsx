import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const ProgressLine = ({ value, name, color }) => {
    const progressRef = useRef(null);
    useEffect(() => {
        progressRef.current.style.width = `${(value / 100) * 150}px`;
        progressRef.current.style.backgroundColor = color;
    }, [value]);
    return (
        <>
            <div className="wrapper-progress">
                {name}
                <div className={`container-line__full`}>
                    <div
                        className={`container-line__value`}
                        ref={progressRef}
                    ></div>
                </div>
            </div>
        </>
    );
};

ProgressLine.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
    type: PropTypes.string
};
export default ProgressLine;
