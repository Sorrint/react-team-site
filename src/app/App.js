import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "../router";

function App() {
    const elements = useRoutes(routes());
    return <>{elements}</>;
}

export default App;
