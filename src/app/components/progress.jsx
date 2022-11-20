import React from "react";
import PropTypes from "prop-types";
import "./progress.css";
import ProgressLine from "./common/progressLine";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Progress = ({ type = "line", value, name, color = "orange" }) => {
    return (
        <>
            {type === "circle" ? (
                <div className="wrapper-progress">
                    <span>{name}</span>
                    <CircularProgressbar
                        value={value}
                        text={`${value}%`}
                        styles={{
                            trail: {
                                strokeLinecap: "butt",
                                transformOrigin: "center center"
                            },
                            path: {
                                stroke: `${color}`,
                                strokeLinecap: "butt",
                                transformOrigin: "center center"
                            },
                            text: {
                                flexWrap: true,
                                fontSize: "20px",
                                fill: `${color}`
                            }
                        }}
                    />
                </div>
            ) : (
                <ProgressLine value={value} color={color} name={name} />
            )}
        </>
    );
};

Progress.propTypes = {
    value: PropTypes.number,
    name: PropTypes.string,
    color: PropTypes.string,
    type: PropTypes.string
};
export default Progress;
