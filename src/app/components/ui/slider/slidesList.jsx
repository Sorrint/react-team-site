import React, { useContext } from "react";
import Slide from "./slide";
import { SliderContext } from "../../slider";

const SlidesList = () => {
    const { slideNumber, items } = useContext(SliderContext);

    return (
        <div
            className="flex h-full w-full transition transform ease-in-out"
            style={{ transform: `translateX(-${slideNumber * 100}%)` }}
        >
            {items.map((slide, index) => (
                <Slide key={index} {...slide} />
            ))}
        </div>
    );
};
export default SlidesList;
