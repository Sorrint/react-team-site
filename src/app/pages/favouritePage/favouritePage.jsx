import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useLocation } from "react-router-dom";
import BreadCrubms from "../../components/breadCrumbs";
import Navbar from "../../components/navBar";
import ParticipantList from "../../components/participantList";
import { getFavouriteUsers } from "../../services/localStorage.service";
import participantService from "../../services/participants.service";

const FavouritePage = () => {
    const [favUsers, setFavUsers] = useState();
    const location = useLocation();

    const favUsersIds = getFavouriteUsers();

    useEffect(() => {
        participantService
            .getFavourites(favUsersIds)
            .then((data) => setFavUsers(data));
    }, []);

    return (
        <>
            <div className="wrapper_100vh">
                <BreadCrubms pathname={location.pathname} />
                <Navbar />
                <div className="flex flex-col justify-center items-center w-full h-full">
                    {favUsers ? (
                        <ParticipantList users={favUsers} />
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
                </div>
            </div>
        </>
    );
};

export default FavouritePage;
