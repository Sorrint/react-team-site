import { useRoutes } from "react-router-dom";
import routes from "../router";
import React from "react";

function App() {
    const elements = useRoutes(routes());
    return <>{elements}</>;
}

export default App;
