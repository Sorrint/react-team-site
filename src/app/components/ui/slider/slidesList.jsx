import React, { useContext } from "react";
import Slide from "./slide";
import { SliderContext } from "../../slider";

const SlidesList = () => {
    const { slideNumber, items } = useContext(SliderContext);
    if (items) {
        return (
            <>
                <div
                    className="flex h-full w-full transition transform ease-in-out"
                    style={{ transform: `translateX(-${slideNumber * 100}%)` }}
                >
                    {items.map((item) => (
                        <Slide
                            key={item.title}
                            value={item.value}
                            title={item.title}
                            color={item.color}
                        />
                    ))}
                </div>
            </>
        );
    }
};
export default SlidesList;
