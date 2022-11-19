import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="relative w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <h1 className="text-xl">
                    DREAM [ <span className="text-[#637ccd]">WEBDEV</span> ]{" "}
                    TEAM
                </h1>
            </div>

            {/* menu */}
            <ul className="hidden md:flex">
                <li>
                    <Link to="hero" smooth="true" duration={500}>
                        Главная
                    </Link>
                </li>
                <li>
                    <Link to="team" smooth="true" duration={500}>
                        Наша команда
                    </Link>
                </li>
                <li>
                    <NavLink to="portfolio" smooth="true" duration={500}>
                        Портфолио
                    </NavLink>
                </li>
                <li>
                    <NavLink to="contacts" smooth="true" duration={500}>
                        Контакты
                    </NavLink>
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
                        : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
                }
            >
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleClick}
                        to="hero"
                        smooth="true"
                        duration={500}
                    >
                        Главная
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <Link
                        onClick={handleClick}
                        to="team"
                        smooth="true"
                        duration={500}
                    >
                        Наша команда
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <NavLink
                        onClick={handleClick}
                        to="portfolio"
                        smooth="true"
                        duration={500}
                    >
                        Портфолио
                    </NavLink>
                </li>

                <li className="py-6 text-4xl">
                    {" "}
                    <NavLink
                        onClick={handleClick}
                        to="contacts"
                        smooth="true"
                        duration={500}
                    >
                        Контакты
                    </NavLink>
                </li>
            </ul>

            {/* Social icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
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
    );
};

export default Navbar;
