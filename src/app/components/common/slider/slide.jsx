import React from "react";
import PropTypes from "prop-types";
// import SlideTitle from "./slideTitle";
import SlideImage from "./slideImage";

const Slide = ({ title, value, color }) => {
    return (
        <div className=" flex-[1_0_100%] relative">
            <SlideImage value={value} name={title} color={color} />
            {/* <SlideTitle title={title} /> */}
        </div>
    );
};

Slide.propTypes = {
    title: PropTypes.string,
    value: PropTypes.number,
    color: PropTypes.string
};

export default Slide;
