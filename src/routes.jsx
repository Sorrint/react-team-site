import ParticipantPage from "./app/pages/participantPage";
import FavouritePage from "./app/pages/favourites/favouritePage";
import MainPage from "./app/pages/mainPage/mainPage";
import { Navigate } from "react-router-dom";
import React from "react";
import ParticipantCard from "./app/components/participantCard";

const routes = () => [
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "card",
        element: (
            <ParticipantCard
                image="https://avatars.githubusercontent.com/u/107841979?v=4"
                name="Яков"
                surname="Шабалин"
                age="31"
                about="Junior Frontend developer из Нягани."
                userId="shabalin_yakov"
            />
        )
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
