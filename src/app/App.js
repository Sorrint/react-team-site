import { useRoutes } from "react-router-dom";
import routes from "../router";
import React from "react";

function App() {
    // comment
    const elements = useRoutes(routes());
    return (
        <>
            <div className="area">
                {elements}
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </>
    );
}

export default App;
