import ParticipantPage from "./app/pages/participantPage/participantPage";
import FavouritePage from "./app/pages/favourites/favouritePage";
import MainPage from "./app/pages/mainPage/mainPage";
import { Navigate } from "react-router-dom";
import React from "react";

const routes = (isLoggedIn, location) => [
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "favorite",
        element: <FavouritePage />
    },
    {
        path: "participant_page",
        element: <ParticipantPage />
    },
    {
        path: "*",
        element: <Navigate to="/" />
    }
];

export default routes;
