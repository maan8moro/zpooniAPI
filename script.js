const { chromium } = require('playwright-core');
const { executablePath } = require('puppeteer');
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

let htmlContent

async function fetchContent(retries = 3) {
    try {
        const browser = await chromium.launch({
            headless: true,
            executablePath: executablePath(), // Use Puppeteer's Chromium path
        });
        
        const page = await browser.newPage();
        
        console.log("Navigating to the target page...");
        await page.goto("https://moro-store.zbooni.com", { waitUntil: "networkidle" });
        
        htmlContent = await page.content();
        console.log("Content fetched successfully!");
        
        await browser.close();
    } catch (error) {
        console.error("Error fetching content:", error);
        if (retries > 0) {
            console.log(`Retrying... (${retries} retries left)`);
            await fetchContent(retries - 1);
        } else {
            console.error("Failed to fetch content after multiple retries.");
        }
    }
}

app.get("/", async (req, res) => {
    await fetchContent(); // Fetch content on each request
    if (htmlContent) {
        res.send(htmlContent);
    } else {
        res.send("Content is not ready yet. Please try again shortly.");
    }
});

app.listen(4000, () => console.log("Listening on trmaen:4000"));
