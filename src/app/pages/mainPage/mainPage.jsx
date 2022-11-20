import React, { useEffect, useState } from "react";
import BreadCrumbs from "../../components/breadCrumbs";
import Hero from "../../components/hero";
import Navbar from "../../components/navBar";
import participantService from "../../services/participants.service";
import Team from "../../components/team";
import { ThreeDots } from "react-loader-spinner";

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
            {users ? (
                <Team users={users} />
            ) : (
                <div className="flex flex-col justify-center items-center w-full h-full">
                    <ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color="#bab1ff"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />
                </div>
            )}
        </>
    );
};

export default MainPage;
