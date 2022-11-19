import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
const BreadCrumbs = ({ pathname }) => {
    const handleClick = () => {
        console.log("click");
        return <Navigate to="/" />;
    };
    const routes = [
        {
            path: "/",
            name: "Главная"
        },
        {
            path: "/participant_page",
            name: "Страница участника"
        },
        {
            path: "/favourite",
            name: "Избранное"
        }
    ];
    const isMainPage = pathname === "/";
    const mainClasses = "breadcrumb-item" + (isMainPage ? " active" : "");
    const getText = (pathname) => {
        const route = routes.find((item) => item.path === pathname);
        return route.name;
    };
    return (
        <nav>
            <ol className="breadcrumb flex text-slate-300">
                <li className={`${mainClasses} pr-0`}>
                    <button onClick={handleClick}>Главная</button>
                </li>
                {!isMainPage && (
                    <>
                        <li>/</li>
                        <li className="breadcrumb-item active pl-0 pr-0">
                            {getText(pathname)}
                        </li>
                    </>
                )}
            </ol>
        </nav>
    );
};

BreadCrumbs.propTypes = {
    pathname: PropTypes.string.isRequired,
    onGoMain: PropTypes.func
};

export default BreadCrumbs;
