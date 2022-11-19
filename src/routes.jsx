import ParticipantPage from "./app/pages/participantPage";
import FavouritePage from "./app/pages/favourites/favouritePage";
import MainPage from "./app/pages/mainPage/mainPage";
import { Navigate } from "react-router-dom";
import React from "react";

const routes = () => [
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "favourite",
        element: <FavouritePage />
    },
    {
        path: "participant_page/:userId",
        element: <ParticipantPage />
    },
    {
        path: "*",
        element: <Navigate to="/" />
    }
];

export default routes;
