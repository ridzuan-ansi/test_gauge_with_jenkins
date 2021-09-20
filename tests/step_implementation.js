/* globals gauge*/
"use strict";
const path = require('path');

// Return a screenshot file name
gauge.customScreenshotWriter = async function () {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'],
        `screenshot-${process.hrtime.bigint()}.png`);

    await screenshot({
        path: screenshotFilePath
    });
    return path.basename(screenshotFilePath);
};


step("Open count character application", async function() {
	console.log("Applicatyion started...");
});

step("Count number of character of <arg0>", async function(arg0) {
	console.log("Number of character of string '" + arg0 + "' is " + arg0.length);
});