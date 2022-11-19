import React from "react";
import PropTypes from "prop-types";

const SlideImage = ({ src, alt }) => {
    return (
        <img
            src={src}
            alt={alt}
            className=" flex my-0 mx-auto w-full max-h-80"
        />
    );
};
SlideImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
};

export default SlideImage;
