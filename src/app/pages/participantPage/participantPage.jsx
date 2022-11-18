import React, { useEffect, useState } from "react";
import API from "../../api";

const ParticipantPage = () => {
    const [participants, setParticipants] = useState()
    useEffect(()=> { API.users.fetchAll().then((data)=> setParticipants(data))}, [])
    useEffect(()=> console.log(participants), [participants])
    return <h1>Participant page</h1>;
};

export default ParticipantPage;
