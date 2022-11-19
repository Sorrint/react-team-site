import React from "react";
import PropTypes from "prop-types";

const Progress = ({ value, name, color }) => {
    console.log(value, name, color);
    return (
        <>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style="width: 45%"
                ></div>
            </div>
        </>
    );
};

Progress.propTypes = {
    value: PropTypes.number,
    name: PropTypes.string,
    color: PropTypes.string
};
export default Progress;
