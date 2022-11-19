import React, { useContext } from "react";
import { SliderContext } from "../../slider";

const Arrows = () => {
    const { changeSlide } = useContext(SliderContext);

    return (
        <div className="text-white flex justify-between text-lg h-full w-full absolute top-1/3 z-[1]">
            <div
                className="arrow left  h-7 w-7 ml-1 hover:cursor-pointer"
                onClick={() => changeSlide(-1)}
            />
            <div
                className="arrow right h-7 w-7 mr-1 hover:cursor-pointer"
                onClick={() => changeSlide(1)}
            />
        </div>
    );
};
export default Arrows;
