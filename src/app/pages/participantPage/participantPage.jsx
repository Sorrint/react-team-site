import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Badge from "../../components/badge";
import BreadCrumbs from "../../components/breadCrumbs";
import Navbar from "../../components/navBar";
import Slider from "../../components/slider";

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
                    <BreadCrumbs pathname={location.pathname} />
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
                                <div className="participant__links">
                                    <Link
                                        className="participant__link"
                                        href="#"
                                        target="_blank"
                                    >
                                        <i className="bx bxl-vk"></i>
                                    </Link>
                                </div>
                            </div>

                            <div className="participant__box">
                                <img
                                    className="participant__box-img"
                                    src={participant.photo}
                                    alt="Avatar"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default ParticipantPage;
