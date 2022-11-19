import React from "react";
import PropTypes from "prop-types";

const SlideTitle = ({ title }) => {
    return <div className="text-center mt-2">{title}</div>;
};

SlideTitle.propTypes = {
    title: PropTypes.string
};
export default SlideTitle;
