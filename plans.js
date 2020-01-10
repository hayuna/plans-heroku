const express = require("express");
const router = express.Router();
const axios = require('axios')
require('dotenv').config()

const runEvent = async (req, res, type, successMessage) => {
    if (!process.env.GITHUB_TOKEN) {
        res.send("GITHUB TOKEN not found");
    } else {
        const body = {
            event_type: 'rebuildprod'
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
        res.send('rebuilding');
    }
}


router.route("/rebuildprod").get(async (req, res) => {
    if (!process.env.GITHUB_TOKEN) {
        res.send("GITHUB TOKEN not found");
    } else {
        const body = {
            event_type: 'rebuildprod'
        };
        await axios.post(
            "https://api.github.com/repos/feature-checker/feature-checker/dispatches",
            body,
            options
        );
        res.send('rebuilding');
    }
});

router.route("/runtests").get(async (req, res) => {
    if (!process.env.GITHUB_TOKEN) {
        res.send("GITHUB TOKEN not found");
    } else {
        const body = {
            event_type: 'runtests'
        };
        await axios.post(
            "https://api.github.com/repos/feature-checker/feature-checker/dispatches",
            body,
            options
        );
        res.send('run testing');
    }
});

module.exports = router;
