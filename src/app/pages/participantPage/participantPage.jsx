import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";


import API from "../../api";

const ParticipantPage = () => {
    const { userId } = useParams();
    const [participant, setParticipant] = useState();
    useEffect(() => {
        API.users.getById(userId).then((data) => setParticipant(data));
    }, []);

    useEffect(() => {
        console.log("participant", participant);
    }, [participant]);

    if (participant) {
        return (
            <div className="participant">
                <div className="container participant__container">
                    <div className="participant__about">
                        <h1 className="participant__title">
                            {participant.about}
                        </h1>
                        <h2 className="participant__subtitle">
                            {participant.name} {participant.surname}
                        </h2>
                        <p className="participant__description">
                            <p>Мне {participant.age}</p>
                            {participant.description}
                        </p>

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
        );
    }
};

export default ParticipantPage;
