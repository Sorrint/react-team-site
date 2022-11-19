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

    const getText = (element, length) => {
        const route = routes.find((item) => item.path === element);
        const index = elements.findIndex((item) => item === element);

        console.log(index);
        if (!route) return "";
        return index + 1 === length ? route.name : `${route.name} /`;
    };
    if (elements) {
        return (
            <nav className="breadcrumbs py-4 px-8">
                <ol className="breadcrumb flex text-slate-300">
                    {pathname === "/"
                        ? "Главная"
                        : elements.map((el) => (
                              <li key={el}>{getText(el, elements.length)}</li>
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
