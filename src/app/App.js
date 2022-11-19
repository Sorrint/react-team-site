import { useRoutes } from "react-router-dom";
import routes from "../routes";
import React from "react";
import Background from "./components/background";
import "flowbite";

function App() {
    // comment
    const elements = useRoutes(routes());
    return (
        <>
            <Background>{elements}</Background>
        </>
    );
}

export default App;
