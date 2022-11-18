import FavouritePage from "./pages/favourites/favouritePage";
import MainPage from "./pages/mainPage/mainPage";
import ParticipantPage from "./pages/participantPage/participantPage";
import { Navigate, useRoutes } from "react-router-dom";

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
