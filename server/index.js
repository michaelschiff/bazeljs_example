/**
 * @flow
 */

"use strict";

import "module-alias/register";
import path from "path";
import type { $Request, $Response, NextFunction } from "express";
import compression from "compression";
import express from "express";
import graphqlHTTP from "express-graphql";
import webpack from "webpack";

import { myUtilityFunction } from "$server/utils";

import webpackConfig from "$root/webpack.config";

// Other variables
const app = express();
const compiler = webpack(webpackConfig);

const baseDir = process.argv[2]
console.log(baseDir)
const port = 8080

myUtilityFunction();

app.use(express.static(baseDir));

// Client routes
app.get("*", (req, res) => {
    console.log(req._parsedOriginalUrl.path)
    res.sendFile(path.join(baseDir, req._parsedOriginalUrl.path));
});

app.listen(port, () => {
    console.log(`Server is available at http://localhost:${port}`);
});
