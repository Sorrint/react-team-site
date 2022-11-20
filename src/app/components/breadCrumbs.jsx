import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const BreadCrumbs = ({ pathname, userId, name, surname }) => {
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
        }
    ];

    const getText = (element, length) => {
        const route = routes.find((item) => item.path === element);
        const index = elements.findIndex((item) => item === element);
        if (!route && userId === element) {
            return `${surname} ${name}`;
        }
        return index + 1 === length ? route.name : <>{route.name}</>;
    };
    if (elements) {
        return (
            <nav className="breadcrumbs h-6">
                <ol className="breadcrumb flex text-slate-300">
                    {pathname === "/"
                        ? "Главная"
                        : elements.map((el, index) => {
                              return index + 1 === elements.length ? (
                                  <li key={el}>
                                      <div className="breadcrumb__text">
                                          {getText(el, elements.length)}
                                      </div>
                                  </li>
                              ) : (
                                  <li key={el}>
                                      <div className="breadcrumb__text">
                                          {getText(el, elements.length)}
                                      </div>
                                      <div className="breadcrumb__divider">
                                          /
                                      </div>
                                  </li>
                              );
                          })}
                </ol>
            </nav>
        );
    }
};

BreadCrumbs.propTypes = {
    pathname: PropTypes.string.isRequired,
    userId: PropTypes.string,
    name: PropTypes.string,
    surname: PropTypes.string
};

export default BreadCrumbs;
