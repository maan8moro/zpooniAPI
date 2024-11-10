const { chromium } = require('playwright-core');
const { executablePath } = require('puppeteer');
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

let htmlContent;

app.get("/", async (req, res) => {
    res.send("test")
});

app.listen(4000, () => console.log("Listening on http://localhost:4000"));
