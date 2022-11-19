import React, { useState } from "react";
import {
    FaBars,
    FaTimes,
    FaGithub
    // FaFacebook,
    // FaLinkedinIn
} from "react-icons/fa";
import { HiOutlineMail, HiArrowNarrowRight } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const MainPage = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <>
            <div className="w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 ">
                <div>
                    <h1 className="text-xl">
                        DREAM [ <span className="text-[#637ccd]">WEBDEV</span> ]{" "}
                        TEAM
                    </h1>
                </div>

                {/* menu */}
                <ul className="hidden md:flex">
                    <li>
                        <Link to="/" smooth={true} duration={500}>
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link to="favorite" smooth={true} duration={500}>
                            Наша команда
                        </Link>
                    </li>
                    <li>
                        <Link to="portfolio" smooth={true} duration={500}>
                            Портфолио
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>
                            Контакты
                        </Link>
                    </li>
                </ul>

                {/* Hamburger */}
                <div onClick={handleClick} className="md:hidden z-10">
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>

                {/* Mobile menu */}
                <ul
                    className={
                        !nav
                            ? "hidden"
                            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center "
                    }
                >
                    <li className="py-6 text-4xl">
                        <Link
                            onClick={handleClick}
                            to="home"
                            smooth={true}
                            duration={500}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        {" "}
                        <Link
                            onClick={handleClick}
                            to="about"
                            smooth={true}
                            duration={500}
                        >
                            About
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        {" "}
                        <Link
                            onClick={handleClick}
                            to="skills"
                            smooth={true}
                            duration={500}
                        >
                            Skills
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        {" "}
                        <Link
                            onClick={handleClick}
                            to="work"
                            smooth={true}
                            duration={500}
                        >
                            Work
                        </Link>
                    </li>
                    <li className="py-6 text-4xl">
                        {" "}
                        <Link
                            onClick={handleClick}
                            to="contact"
                            smooth={true}
                            duration={500}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Social icons */}
                <div className="hidden lg:flex fixed flex-col top-[35%] left-0  ">
                    <ul>
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                            <a
                                className="flex justify-between items-center w-full text-gray-300"
                                href="/"
                            >
                                Github <FaGithub size={30} />
                            </a>
                        </li>
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                            <a
                                className="flex justify-between items-center w-full text-gray-300"
                                href="/"
                            >
                                Email <HiOutlineMail size={30} />
                            </a>
                        </li>
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                            <a
                                className="flex justify-between items-center w-full text-gray-300"
                                href="/"
                            >
                                Resume <BsFillPersonLinesFill size={30} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div name="home" className="w-full h-screen bg-[#0a192f]/50">
                {/* Container */}
                <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-screen">
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
                        интерфейса до настройки бэкенда. Мы успешно разработали
                        уже более 120 проектов.
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
            <div
                name="about"
                className="w-full h-screen bg-[#0a192f] text-gray-300"
            >
                <div className="flex flex-col justify-center items-center w-full h-full">
                    <div className="sm:text-right py-8 px-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                            Наша команда
                        </p>
                    </div>
                    <div className="max-w-[1000px] pb-8 text-center">
                        <p>
                            Высокомотивированные опытные эксперты решат задачи
                            любого уровня сложности. Каждый из участников нашей
                            команды подготовлен и проверен в боевых условиях,
                            доказал свою способность поднимать сложные решения.
                            На их счету уже более 120 успешно реализованных
                            проектов.{" "}
                        </p>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                        <div>
                            <p>
                                Карточка участника Карточка участника Карточка
                                участника Карточка участника Карточка участника
                                Карточка участника Карточка участника Карточка
                                участника Карточка участника Карточка участника
                                Карточка участника Карточка участника Карточка
                                участника Карточка участника Карточка участника
                            </p>
                        </div>
                        <div>
                            <p>
                                Карточка участника Карточка участника Карточка
                                участника Карточка участника Карточка участника
                                Карточка участника Карточка участника Карточка
                                участника Карточка участника Карточка участника
                                Карточка участника Карточка участника Карточка
                                участника Карточка участника Карточка участника
                            </p>
                        </div>
                        <div>
                            <p>
                                Карточка участника Карточка участника Карточка
                                участника Карточка участника Карточка участника
                                Карточка участника Карточка участника Карточка
                                участника Карточка участника Карточка участника
                                Карточка участника Карточка участника Карточка
                                участника Карточка участника Карточка участника
                            </p>
                        </div>
                        <div>
                            <p>
                                Карточка участника Карточка участника Карточка
                                участника Карточка участника Карточка участника
                                Карточка участника Карточка участника Карточка
                                участника Карточка участника Карточка участника
                                Карточка участника Карточка участника Карточка
                                участника Карточка участника Карточка участника
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPage;
