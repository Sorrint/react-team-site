import React, { useEffect, useState } from "react";
import BreadCrumbs from "../../components/common/breadCrumbs";
import Hero from "../../components/ui/hero";
import Navbar from "../../components/ui/navBar";
import participantService from "../../services/participants.service";
import Team from "../../components/ui/team";
import { ThreeDots } from "react-loader-spinner";
import SocialIcon from "../../components/common/socialIcon";

const MainPage = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        participantService.getAll().then((data) => setUsers(data));
    }, []);
    return (
        <>
            <BreadCrumbs pathname={location.pathname} />
            <Navbar />
            <SocialIcon />
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
