import React, { useEffect, useState } from "react";
import BreadCrumbs from "../../components/breadCrumbs";
import Hero from "../../components/hero";
import Navbar from "../../components/navBar";
import participantService from "../../services/participants.service";
import Team from "../../components/team";

const MainPage = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        participantService.getAll().then((data) => setUsers(data));
    }, []);
    return (
        <>
            <BreadCrumbs pathname={location.pathname} />
            <Navbar />
            <Hero />
            {users && <Team users={users} />}
        </>
    );
};

export default MainPage;
