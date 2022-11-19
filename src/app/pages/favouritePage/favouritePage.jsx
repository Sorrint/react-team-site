import React from "react";
import { useLocation } from "react-router-dom";
import BreadCrubms from "../../components/breadCrumbs";
import Navbar from "../../components/navBar";
import Progress from "../../components/progress";

const FavouritePage = () => {
    const location = useLocation();
    return (
        <>
            <Navbar />
            <BreadCrubms pathname={location.pathname} />
            <div className="wrapper">
                <Progress value="30" name="CSS" type="circle" />
            </div>
        </>
    );
};

export default FavouritePage;
