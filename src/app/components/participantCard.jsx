import React, { useEffect, useState } from "react";
import Button from "./button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
    getFavouriteUsers,
    removeFavouriteUser,
    setFavouriteUser
} from "../services/localStorage.service";

const ParticipantCard = ({ photo, name, surname, age, about, userId }) => {
    const [isFavourite, setFavourite] = useState(false);

    useEffect(() => {
        const favouriteArr = getFavouriteUsers();
        if (favouriteArr) {
            const search = favouriteArr.includes(userId, 0);
            setFavourite(search);
        }
    }, []);

    const addToFavourite = () => {

        setFavouriteUser(userId);
        setFavourite(true);
    };

    const removeFromFavourite = () => {
        removeFavouriteUser(userId);
        setFavourite(false);

    };
    return (
        <div className="flex flex-col items-center max-w-sm rounded overflow-hidden shadow-lg pb-5">
            <div className="border mx-2 rounded-lg bg-indigo-300">
                <img
                    className="object-cover h-72 w-72 rounded-lg"
                    src={photo}
                    alt="participant photo"
                />
            </div>
            <div className="flex flex-col h-full px-6 py-4 ml-6">
                <div className="text-yellow-400 font-bold text-xl mb-2">
                    {name} {surname}
                </div>
                <div className="font-bold mb-2">Возраст: {age}</div>
                <p className=" font-bold text-base">{about}</p>
            </div>
            <div className="flex justify-around">
                <div className="px-2">
                    <Link to={`/participant_page/${userId}`}>
                        <Button content="Открыть" border="rounded" />
                    </Link>
                </div>
                <div className="px-2">
                    {!isFavourite ? (
                        <Button
                            content="Добавить в избранное"
                            border="rounded"
                            onClick={addToFavourite}
                        />
                    ) : (
                        <Button
                            content="Удалить из избранного"
                            color="secondary"
                            border="rounded"
                            onClick={removeFromFavourite}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
ParticipantCard.propTypes = {
    photo: PropTypes.string,
    name: PropTypes.string,
    surname: PropTypes.string,
    age: PropTypes.number,
    about: PropTypes.string,
    userId: PropTypes.string
};

export default ParticipantCard;
