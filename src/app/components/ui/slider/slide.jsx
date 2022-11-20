import React from "react";
import PropTypes from "prop-types";
// import SlideTitle from "./slideTitle";
import SlideImage from "./slideImage";

const Slide = ({ title, value }) => {
    return (
        <div className=" flex-[1_0_100%] relative">
            <SlideImage value={value} name={title} />
            {/* <SlideTitle title={title} /> */}
        </div>
    );
};

Slide.propTypes = {
    title: PropTypes.string,
    value: PropTypes.number
};

export default Slide;
