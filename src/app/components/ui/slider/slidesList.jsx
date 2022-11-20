import React, { useContext } from "react";
import Slide from "./slide";
import { SliderContext } from "../../slider";

const SlidesList = () => {
    const { slideNumber, technologies } = useContext(SliderContext);
    return (
        <div
            className="flex h-full w-full transition transform ease-in-out"
            style={{ transform: `translateX(-${slideNumber * 100}%)` }}
        >
            {Object.keys(technologies).map((tech) => (
                <Slide key={tech} title={tech} value={technologies[tech]} />
            ))}
        </div>
    );
};
export default SlidesList;
