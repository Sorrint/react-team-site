import React from "react";
import PropTypes from "prop-types";
const BreadCrubms = ({ page, onGoMain }) => {
    const isMainPage = page.id === "main";
    const mainClasses = "breadcrumb-item" + (isMainPage ? " active" : "");
    return (
        <nav>
            <ol className="breadcrumb">
                <li className={mainClasses} onClick={onGoMain}>
                    Главная
                </li>
                {!isMainPage && (
                    <li className="breadcrumb-item active">{page.text}</li>
                )}
            </ol>
        </nav>
    );
};

BreadCrubms.propTypes = {
    page: PropTypes.object.isRequired,
    onGoMain: PropTypes.func
};

export default BreadCrubms;
