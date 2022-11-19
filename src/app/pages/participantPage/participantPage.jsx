import React, { useEffect, useState } from "react";
import API from "../../api";
import Button from "../../components/button";

const ParticipantPage = () => {
    const { userId } = useParams();
    const [participant, setParticipant] = useState();
    useEffect(() => {
        API.users.getById(userId).then((data) => setParticipant(data));
    }, []);
    useEffect(() => console.log(participants), [participants]);
    return <h1>Participant page</h1>;
};

export default ParticipantPage;
