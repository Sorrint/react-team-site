import React, { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";

import Arrows from "./ui/slider/arrows";
// import Dots from "./ui/slider/dots";

import SlidesList from "./ui/slider/slidesList";

export const SliderContext = createContext();

const Slider = function ({
    width,
    height,
    autoPlay,
    autoPlayTime,
    technologies
}) {
    const [items, setItems] = useState([]);
    const [slide, setSlide] = useState(0);
    const [touchPosition, setTouchPosition] = useState(null);
    const [progressType, setProgressType] = useState("circle");

    useEffect(() => {
        setItems(technologies);
    }, []);

    const changeSlide = (direction = 1) => {
        let slideNumber = 0;

        if (slide + direction < 0) {
            slideNumber = items.length - 1;
        } else {
            slideNumber = (slide + direction) % items.length;
        }

        setSlide(slideNumber);
    };

    const goToSlide = (number) => {
        setSlide(number % items.length);
    };

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;

        setTouchPosition(touchDown);
    };

    const handleTouchMove = (e) => {
        if (touchPosition === null) {
            return;
        }

        const currentPosition = e.touches[0].clientX;
        const direction = touchPosition - currentPosition;

        if (direction > 10) {
            changeSlide(1);
        }

        if (direction < -10) {
            changeSlide(-1);
        }

        setTouchPosition(null);
    };
    useEffect(() => {
        if (!autoPlay) return;

        const interval = setInterval(() => {
            changeSlide(1);
        }, autoPlayTime);

        return () => {
            clearInterval(interval);
        };
    }, [items.length, slide]); // when images uploaded or slide changed manually we start timer
    const progressHandler = () => {
        if (progressType === "circle") {
            setProgressType("line");
        } else {
            setProgressType("circle");
        }
    };
    return (
        <div
            style={{ height }}
            className="slider overflow-hidden relative mt-1 mt-5"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <SliderContext.Provider
                value={{
                    goToSlide,
                    changeSlide,
                    slidesCount: items.length,
                    slideNumber: slide,
                    items,
                    progressType
                }}
            >
                <button
                    className="bg-amber-300 rounded-lg py-2 px-4"
                    onClick={progressHandler}
                >
                    {progressType === "line"
                        ? "Круглый прогресс-бар"
                        : "Прогресс-бар линия"}
                </button>
                <Arrows />
                <SlidesList />

                {/* <Dots /> */}
            </SliderContext.Provider>
        </div>
    );
};

Slider.propTypes = {
    autoPlay: PropTypes.bool,
    autoPlayTime: PropTypes.number,
    width: PropTypes.string,
    height: PropTypes.string,
    technologies: PropTypes.array
};

Slider.defaultProps = {
    autoPlay: false,
    autoPlayTime: 5000,
    width: "100%",
    height: "100%"
};

export default Slider;
