import React from "react";
import { render } from "react-dom";
import Home from "../../src/pages/containers/Home";

const homeContainer = document.getElementById("home-container");

render(<Home />, homeContainer);
