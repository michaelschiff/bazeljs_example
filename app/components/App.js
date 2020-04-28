/**
 * @flow
 */

"use strict";

import * as React from "react";

import {
    BrowserRouter as Router,
} from "react-router-dom";
import { Grommet } from "grommet";


function render({ error, props }): React.Node {
    console.log("render")
    return (
        <div background="dark-1" overflow="auto">
            <span> Hello, World! </span>
        </div>
    );
}

function App(): React.Node {
    console.log("APP")
    return render({}, {})
}

export default App;
