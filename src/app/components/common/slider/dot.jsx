import React, { useContext } from "react";
import PropTypes from "prop-types";
import { SliderContext } from "../../slider";

const Dot = ({ number }) => {
    const { goToSlide, slideNumber } = useContext(SliderContext);

    return (
        <div
            className={`dot ${
                slideNumber === number ? "selected" : ""
            } text-white`}
            onClick={() => goToSlide(number)}
        />
    );
};

Dot.propTypes = {
    number: PropTypes.number
};

export default Dot;
