import React, { useContext } from "react";
import PropTypes from "prop-types";
import Progress from "../progress/progress";
import { SliderContext } from "../../ui/slider";

const SlideImage = ({ value, name, color }) => {
    const { progressType } = useContext(SliderContext);

    return (
        <div className=" flex my-0 mx-auto w-full max-h-80 justify-center">
            <Progress
                value={value}
                name={name}
                type={progressType}
                color={color}
            />
        </div>
    );
};
SlideImage.propTypes = {
    value: PropTypes.number,
    name: PropTypes.string,
    color: PropTypes.string
};

export default SlideImage;
