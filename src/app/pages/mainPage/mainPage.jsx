import React from "react";
import BreadCrumbs from "../../components/breadCrumbs";
import Hero from "../../components/hero";
import Navbar from "../../components/navBar";
import Team from "../../components/team";

const MainPage = () => {
    return (
        <>
            <Navbar />
            <BreadCrumbs pathname={location.pathname} />
            <Hero />
            <Team />
        </>
    );
};

export default MainPage;
