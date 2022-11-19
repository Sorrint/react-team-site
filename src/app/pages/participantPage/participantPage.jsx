import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../../api";
import BreadCrubms from "../../components/breadCrumbs";

const ParticipantPage = () => {
    const location = useLocation();
    const [participants, setParticipants] = useState();
    useEffect(() => {
        API.users.fetchAll().then((data) => setParticipants(data));
    }, []);
    useEffect(() => console.log(participants), [participants]);
    return (
        <>
            <BreadCrubms pathname={location.pathname} />
            <h1>Participant page</h1>
        </>
    );
};

export default ParticipantPage;
