import React from "react";
import BreadCrumbs from "../../components/breadCrumbs";
import Hero from "../../components/hero";
import Navbar from "../../components/navBar";
import Team from "../../components/team";

const MainPage = () => {
    return (
        <>
            <BreadCrumbs pathname={location.pathname} />

            <Navbar />
            <Hero />
            <Team />
        </>
    );
};

export default MainPage;
