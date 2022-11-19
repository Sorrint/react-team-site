import React, { useContext } from "react";
import { SliderContext } from "../../slider";

const Arrows = () => {
    const { changeSlide } = useContext(SliderContext);

    return (
        <div className="text-white flex justify-between text-lg h-full w-full absolute top-1/3 z-[1]">
            <div
                className="arrow left  h-9 w-9 ml-1 hover:cursor-pointer"
                onClick={() => changeSlide(-1)}
            >
                <i>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-9 w-9"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>
                </i>
            </div>

            <div
                className="arrow right h-9 w-9 mr-1 hover:cursor-pointer "
                onClick={() => changeSlide(1)}
            >
                <i>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-9 w-9 "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </i>
            </div>
        </div>
    );
};
export default Arrows;
