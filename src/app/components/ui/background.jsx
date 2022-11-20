import React, { useState } from "react";
import PropTypes, { arrayOf } from "prop-types";
const Background = ({ children }) => {
    const [color, setColor] = useState("");
    const colors = ["yellow", "green", "blue", "red", "orange", "violete"];
    const onSubmit = () => {
        if (color !== "") {
            const anotherColors = colors.filter((c) => c !== color);
            const selectColor =
                anotherColors[Math.floor(Math.random() * anotherColors.length)];
            setColor(` ${selectColor}`);
        }
        setColor(colors[Math.floor(Math.random() * colors.length)]);
    };
    return (
        <>
            <div className="area">
                <ul className={`circles ${color}`}>
                    <li>Здесь</li>
                    <li></li>
                    <li></li>
                    <li>может</li>
                    <li
                        role="button"
                        onClick={onSubmit}
                        className="button__hidden"
                    >
                        *
                    </li>
                    <li>быть</li>
                    <li>ваша</li>
                    <li></li>
                    <li></li>
                    <li>реклама</li>
                </ul>
                {children}
            </div>
        </>
    );
};

Background.propTypes = {
    children: PropTypes.oneOfType([arrayOf(PropTypes.node), PropTypes.node])
};
export default Background;
