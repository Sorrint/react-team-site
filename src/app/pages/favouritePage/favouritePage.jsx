import React from "react";
import { useLocation } from "react-router-dom";
import BreadCrubms from "../../components/breadCrumbs";
import Navbar from "../../components/navBar";

const FavouritePage = () => {
    const location = useLocation();
    return (
        <>
            <div className="wrapper_100vh">
                <Navbar />
                <BreadCrubms pathname={location.pathname} />
                <div className="participant">
                    <div className="container participant__container">
                        <div className="participant__about"></div>

                        <div className="participant__box"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FavouritePage;
