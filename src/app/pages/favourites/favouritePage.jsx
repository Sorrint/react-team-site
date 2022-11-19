import React from "react";
import { useLocation } from "react-router-dom";
import BreadCrubms from "../../components/breadCrumbs";
import Progress from "../../components/progress";

const FavouritePage = () => {
    const location = useLocation();
    return (
        <>
            <BreadCrubms pathname={location.pathname} />
            <Progress value={45} type="bar" name="CSS" />

            <h1>Favourite Page</h1>
        </>
    );
};

export default FavouritePage;
