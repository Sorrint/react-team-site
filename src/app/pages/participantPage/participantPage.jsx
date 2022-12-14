import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Badge from "../../components/common/badge";
import BreadCrumbs from "../../components/common/breadCrumbs";
import Contacts from "../../components/common/contacts";
import Navbar from "../../components/ui/navBar";
import Slider from "../../components/ui/slider";

import AboutParticipant from "../../components/ui/aboutParticipant";
import participantService from "../../services/participants.service";

const ParticipantPage = () => {
    const { userId } = useParams();
    const location = useLocation();
    const [participant, setParticipant] = useState();
    useEffect(() => {
        participantService.getById(userId).then((data) => setParticipant(data));
    }, []);

    if (participant) {
        return (
            <>
                <div className="wrapper_100vh">
                    <BreadCrumbs
                        pathname={location.pathname}
                        userId={participant._id}
                        name={participant.name}
                        surname={participant.surname}
                    />
                    <Navbar />
                    <div className="participant pl-10">
                        <div className="container participant__container">
                            <div className="participant__about">
                                <AboutParticipant {...participant} />
                                <Badge {...participant} />
                                <Slider
                                    autoPlay={false}
                                    autoPlayTime={9000}
                                    width={"50%"}
                                    height={"40%"}
                                    {...participant}
                                />
                            </div>
                            <div className="participant__contacts">
                                <div className="participant__box">
                                    <img
                                        className="participant__box-img"
                                        src={participant.photo}
                                        alt="Avatar"
                                    />
                                </div>
                                <Contacts contacts={participant.contacts} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default ParticipantPage;
