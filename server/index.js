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

import webpackConfig from "$root/webpack.config";

// Other variables
const app = express();
const compiler = webpack(webpackConfig);

const baseDir = "./dist";
const port = 8080

app.use(express.static(baseDir));

// Client routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./", baseDir, "/index.html"));
});

app.listen(port, () => {
    console.log(`Server is available at http://localhost:${port}`);
});
