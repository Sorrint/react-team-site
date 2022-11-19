import React from "react";
import { useLocation } from "react-router-dom";
import BreadCrubms from "../../components/breadCrumbs";
import Navbar from "../../components/navBar";

const FavouritePage = () => {
    const location = useLocation();
    return (
        <>
            <Navbar />
            <BreadCrubms pathname={location.pathname} />
        </>
    );
};

export default FavouritePage;
