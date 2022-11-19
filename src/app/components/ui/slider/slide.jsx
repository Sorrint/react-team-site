import React from "react";
import PropTypes from "prop-types";
import SlideTitle from "./slideTitle";
import SlideImage from "./slideImage";

const Slide = ({ url, title }) => {
    return (
        <div className=" flex-[1_0_100%] relative">
            <SlideImage src={url} alt={title} />
            <SlideTitle title={title} />
        </div>
    );
};

Slide.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string
};

export default Slide;
