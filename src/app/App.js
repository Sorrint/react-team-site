
import React from "react";
import FavouritePage from "./pages/favourites/favouritePage";
import MainPage from "./pages/mainPage/mainPage";
import ParticipantPage from "./pages/participantPage/participantPage";

function App() {
    const routes = useRoutes([
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
        { path: "*", element: <Navigate to="/" /> }
    ]);
    return { routes };
}

export default App;
