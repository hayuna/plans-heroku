const express = require("express");
const router = express.Router();
const axios = require('axios')
require('dotenv').config()

const runEvent = async (res, type, successMessage) => {
    if (!process.env.GITHUB_TOKEN) {
        res.send("GITHUB TOKEN not found");
    } else {
        const body = {
            event_type: type
        };
        const options = {
            headers: {
                Accept: "application/vnd.github.everest-preview+json",
                Authorization: `token ${process.env.GITHUB_TOKEN}`
            }
        };
        await axios.post(
            "https://api.github.com/repos/feature-checker/feature-checker/dispatches",
            body,
            options
        );
        res.send(successMessage);
    }
}


router.route("/rebuildprod").get(async (req, res) => {
    runEvent(res, 'rebuildprod', 'rebuilding');
});

router.route("/runtests").get(async (req, res) => {
    runEvent(res, 'runtests', 'run testing');
});

module.exports = router;
