import React from "react";
import FavouritePage from "./pages/favourites/favouritePage";
import MainPage from "./pages/mainPage/mainPage";
import ParticipantPage from "./pages/participantPage/participantPage";

function App() {
    return (
        <>
            <MainPage />
            <FavouritePage />
            <ParticipantPage />
        </>
    );
}

export default App;
