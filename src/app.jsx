import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () =>
    React.createElement("section", { id: "my-id" }, [
        React.createElement(Pet, { name: "dog-1", color: "yellow" }),
        React.createElement(Pet, { name: "cow-2", color: "grey" })
    ]);

render(React.createElement(App), document.getElementById("root"));
