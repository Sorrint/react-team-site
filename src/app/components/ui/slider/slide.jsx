import React from "react";
import PropTypes from "prop-types";
import SlideTitle from "./slideTitle";
import SlideImage from "./slideImage";
// import Progress from "../../progress";

const Slide = ({ url, title, value }) => {
    return (
        <div className=" flex-[1_0_100%] relative">
            {/* <Progress value={value} name={title} /> */}
            {/* <SlideImage src={url} alt={title} /> */}
            <SlideImage value={value} name={title} />
            <SlideTitle title={title} />
        </div>
    );
};

Slide.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.number
};

export default Slide;
