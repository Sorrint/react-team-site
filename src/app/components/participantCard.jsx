// ### Отображает

// - Имя, фамилия
// - Возраст
// - Фотография (если нет фотографии, то любимая картинка)
// - О себе (2-3 предложения)
// - Кнопка "открыть"
// - Кнопка "добавить в избранное"

import React from "react";
import Button from "./button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ParticipantCard = ({
    image,
    name,
    surname,
    age,
    about,
    description,
    userId
}) => {
    const addToFavourite = () => {
        return null;
    };
    return (
        <div className="flex flex-col items-center max-w-sm rounded overflow-hidden shadow-lg">
            <div className="border mx-2 rounded-lg bg-indigo-300">
                <img
                    className="object-cover h-72 w-72 rounded-lg"
                    src={image}
                    alt="participant photo"
                />
            </div>
            <div className="px-6 py-4 ml-6">
                <div className="font-bold text-xl mb-2">
                    {name} {surname}
                </div>
                <div className="font-bold mb-2">Возраст: {age}</div>
                <p className="text-gray-700 text-base">{about}</p>
                {description && (
                    <p className="text-gray-700 text-base">{description}</p>
                )}
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                </span>
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
    image: PropTypes.string,
    name: PropTypes.string,
    surname: PropTypes.string,
    age: PropTypes.string,
    about: PropTypes.string,
    userId: PropTypes.string,
    description: PropTypes.string
};
export default ParticipantCard;
