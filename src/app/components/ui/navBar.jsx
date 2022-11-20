import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";

import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
    const { pathname } = useLocation();
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="relative w-full h-[80px] flex justify-between items-center px-4 text-gray-300">
            <div>
                <h1 className="text-xl">
                    DREAM [ <span className="text-[#637ccd]">WEBDEV</span> ]{" "}
                    TEAM
                </h1>
            </div>

            {/* menu */}
            <ul className="hidden md:flex">
                <li>
                    {pathname === "/" ? (
                        <Link to="hero" smooth="true" duration={500}>
                            Главная
                        </Link>
                    ) : (
                        <NavLink to="/" smooth="true" duration={500}>
                            Главная
                        </NavLink>
                    )}
                </li>
                <li>
                    {pathname === "/" ? (
                        <Link to="team" smooth="true" duration={500}>
                            Наша команда
                        </Link>
                    ) : (
                        <NavLink to="/" smooth="true" duration={500}>
                            Наша команда
                        </NavLink>
                    )}
                </li>

                <li>
                    <NavLink to="favourite" smooth="true" duration={500}>
                        Избранное
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
                    {pathname === "/" ? (
                        <Link
                            onClick={handleClick}
                            to="hero"
                            smooth="true"
                            duration={500}
                        >
                            Главная
                        </Link>
                    ) : (
                        <NavLink to="/" smooth="true" duration={500}>
                            Главная
                        </NavLink>
                    )}
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    {pathname === "/" ? (
                        <Link
                            onClick={handleClick}
                            to="team"
                            smooth="true"
                            duration={500}
                        >
                            Наша команда
                        </Link>
                    ) : (
                        <NavLink to="/" smooth="true" duration={500}>
                            Наша команда
                        </NavLink>
                    )}
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <NavLink
                        onClick={handleClick}
                        to="favourite"
                        smooth="true"
                        duration={500}
                    >
                        Избранное
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
