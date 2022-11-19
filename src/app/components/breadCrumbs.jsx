import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
const BreadCrumbs = ({ pathname }) => {
    const [elements, setElements] = useState();

    useEffect(() => {
        setElements(pathname.split("/"));
    }, []);

    const routes = [
        {
            path: "",
            name: "Главная"
        },
        {
            path: "participant_page",
            name: "Страница участника"
        },
        {
            path: "favourite",
            name: "Избранное"
        },
        {
            path: "lebedev_anton",
            name: "Лебедев Антон"
        },
        {
            path: "zabava_dmitriy",
            name: "Забава Дмитрий"
        }
    ];

    const getText = (pathname) => {
        const route = routes.find((item) => item.path === pathname);
        if (!route) return "";
        return route.name;
    };
    if (elements) {
        return (
            <nav className="breadcrumbs">
                <ol className="breadcrumb flex text-slate-300">
                    {elements.map((el) => (
                        <li key={el}>{getText(el)}</li>
                    ))}
                </ol>
            </nav>
        );
    }
};

BreadCrumbs.propTypes = {
    pathname: PropTypes.string.isRequired,
    onGoMain: PropTypes.func
};

export default BreadCrumbs;
