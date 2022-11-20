import React from "react";
import PropTypes from "prop-types";
import ParticipantCard from "./participantCard";
const ParticipantList = ({ users }) => {
    return (
        <div className="max-w-[1000px] grid place-content-center sm:grid-cols-2 gap-y-16 gap-x-8 px-4 py-10 z-20">
            {users.map((user) => {
                return (
                    <ParticipantCard
                        key={user._id}
                        photo={user.photo}
                        name={user.name}
                        surname={user.surname}
                        age={user.age}
                        about={user.about}
                        userId={user._id}
                    />
                );
            })}
        </div>
    );
};

ParticipantList.propTypes = {
    users: PropTypes.array
};

export default ParticipantList;
