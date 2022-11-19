import React from "react";
import PropTypes, { arrayOf } from "prop-types";
const Background = ({ children }) => {
    const onSubmit = () => {
        console.log("тык");
    };
    return (
        <>
            <div className="area">
                <ul className="circles">
                    <li>Здесь</li>
                    <li></li>
                    <li></li>
                    <li>может</li>
                    <li role="button" onClick={onSubmit}>
                        *
                    </li>
                    <li>быть</li>
                    <li>ваша</li>
                    <li></li>
                    <li></li>
                    <li>реклама</li>
                </ul>
            </div>
            {children}
        </>
    );
};

Background.propTypes = {
    children: PropTypes.oneOfType([arrayOf(PropTypes.node), PropTypes.node])
};
export default Background;