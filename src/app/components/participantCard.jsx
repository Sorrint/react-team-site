import React from "react";
import Button from "./button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ParticipantCard = ({ photo, name, surname, age, about, userId }) => {
    const addToFavourite = () => {
        return localStorage.setItem("userId", JSON.stringify(userId));
    };
    return (
        <div className="flex flex-col items-center max-w-sm rounded overflow-hidden shadow-lg">
            <div className="border mx-2 rounded-lg bg-indigo-300">
                <img
                    className="object-cover h-72 w-72 rounded-lg"
                    src={photo}
                    alt="participant photo"
                />
            </div>
            <div className="px-6 py-4 ml-6">
                <div className="font-bold text-xl mb-2">
                    {name} {surname}
                </div>
                <div className="font-bold mb-2">Возраст: {age}</div>
                <p className="text-gray-700 text-base">{about}</p>
            </div>
            <div className="flex justify-around">
                <div className="px-2">
                    <Link to={`/participant_page/${userId}`}>
                        <Button content="Открыть" border="rounded" />
                    </Link>
                </div>
                <div className="px-2">
                    <Button
                        content="Добавить в избранное"
                        border="rounded"
                        onClick={addToFavourite}
                    />
                </div>
            </div>
        </div>
    );
};
ParticipantCard.propTypes = {
    photo: PropTypes.string,
    name: PropTypes.string,
    surname: PropTypes.string,
    age: PropTypes.string,
    about: PropTypes.string,
    userId: PropTypes.string
};

export default ParticipantCard;
