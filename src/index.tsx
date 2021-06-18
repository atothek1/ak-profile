import React from "react";
import { render } from "react-dom";
import { getRootElement } from "@utils/dom";
import { App } from "@containers/App";

render(
    <App
        name={ __NAME__ }
        version={ __VERSION__ }
        environment={ __ENVIRONMENT__ }
    />,
    getRootElement(),
);