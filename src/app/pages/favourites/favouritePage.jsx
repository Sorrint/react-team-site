import React from "react";
import { useLocation } from "react-router-dom";
import BreadCrubms from "../../components/breadCrumbs";
import Navbar from "../../components/navBar";

const FavouritePage = () => {
    const location = useLocation();
    return (
        <>
            <BreadCrubms pathname={location.pathname} />
            <Navbar />
            <h1>Favourite Page</h1>
        </>
    );
};

export default FavouritePage;
