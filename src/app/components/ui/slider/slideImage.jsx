import React from "react";
import PropTypes from "prop-types";
import Progress from "../../progress";

const SlideImage = ({ src, alt, value, title }) => {
    return (
        <div className=" flex my-0 mx-auto w-full max-h-80 justify-center">
            <Progress value={value} name={title} type="circle" />
        </div>
    );
};
SlideImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    value: PropTypes.number,
    title: PropTypes.string
};

export default SlideImage;
