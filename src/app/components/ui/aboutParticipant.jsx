import React from "react";
import PropTypes from "prop-types";

const AboutParticipant = ({ about, name, surname, age, description }) => {
    return (
        <>
            <h1 className="text-4xl sm:text-4xl font-bold text-[#8892b0] pt-6 pb-2">
                {about}
            </h1>
            <h2 className="text-4xl sm:text-6xl font-bold text-[#e1e1e1] pb-2">
                {name} {surname}
            </h2>
            <p className="text-2xl sm:text-2xl font-bold text-[#8892b0] pb-6">
                Мне {age}
            </p>
            <p className=" md:text-xl text-sm text-[#8892b0] pb-6">
                {description}
            </p>
        </>
    );
};

AboutParticipant.propTypes = {
    about: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
};

export default AboutParticipant;
