const express = require("express");
const { chromium } = require("playwright"); // Import Playwright
const cors = require("cors");
const app = express();

// let htmlContent;

// // Enable CORS for all routes
// app.use(cors());

// (async () => {
//     // Launch the browser
//     const browser = await chromium.launch();
//     const page = await browser.newPage();
//     await page.goto("https://moro-store.zbooni.com", { waitUntil: "networkidle" });

//     // Get the HTML content of the page
//     htmlContent = await page.content();

//     // Close the browser
//     await browser.close();
// })();

app.get("/", (req, res) => {
    res.send("test");
    // if (htmlContent) {
    //     res.send(htmlContent);
    // } else {
    //     res.send("Content is not ready yet. Please try again shortly.");
    // }
});

app.listen(4000, () => console.log("Listening on http://localhost:4000"));
