import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
    return (

        <div name="hero" className="w-full h-screen">

            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-yellow-400 py-2">
                    Крутая команда разработчиков
                </p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] py-2">
                    DREAM [ <span className="text-[#637ccd]">WEBDEV</span> ]{" "}
                    TEAM
                </h1>
                <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0]">
                    Full Stack приложения на ReactJS.
                </h2>
                <p className="text-[#8892b0] py-4 max-w-[700px]">
                    Профессиональная разработка фронт-энд приложений на
                    библиотеке ReactJS. Полный цикл разработки от дизайна
                    интерфейса до настройки бэкенда. Мы успешно разработали уже
                    более 120 проектов.
                </p>
                <div>
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                        Наша команда
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-3 " />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
