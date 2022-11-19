import React, { useEffect, useState } from "react";

import { Link, useLocation, useParams } from "react-router-dom";
import API from "../../api";
import Badge from "../../components/badge";
import BreadCrumbs from "../../components/breadCrumbs";
import Navbar from "../../components/navBar";
=========
import { Link, useParams } from "react-router-dom";
import AboutParticipant from "../../components/ui/aboutParticipant";
import API from "../../api";
>>>>>>>>> Temporary merge branch 2

const ParticipantPage = () => {
    const { userId } = useParams();
    const location = useLocation();
    const [participant, setParticipant] = useState();
    useEffect(() => {
        API.users.getById(userId).then((data) => setParticipant(data));
    }, []);

    if (participant) {
        return (
            <>
                <BreadCrumbs pathname={location.pathname} />
                <Navbar />
                <div className="participant">
                    <div className="container participant__container">
                        <div className="participant__about">
                            <AboutParticipant {...participant} />
                            <Badge {...participant} />
                            <Slider />
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
            </>
        );
    }
};

export default ParticipantPage;
