import React from "react";
import PropTypes from "prop-types";

const AboutParticipant = ({ about, name, surname, age, description }) => {
    return (
        <div className="my-2">
            <h1 className="text-2xl  mb-2 md:text-5xl md:mb-5 md:leading-tight">
                {about}
            </h1>
            <h2 className="md:text-4xl md:font-normal text-xl font-light">
                {name} {surname}
            </h2>
            <p>Мне {age}</p>
            <p className=" md:text-xl text-sm">{description}</p>
        </div>
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
