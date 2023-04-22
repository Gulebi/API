const requireDir = require("require-dir");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const modules = requireDir("./modules");
console.log(`Loaded ${Object.keys(modules).length} modules.`);

const messages = {
    listOfEndpoints: { "List of endpoints": Object.getOwnPropertyNames(modules).join(", ") },
    endpointError: { error: "Specify the correct endpoint" },
    imageError: { error: "Specify the correct image url" },
    textError: { error: "Specify the text" },
    intError: { error: "Specify the correct integer" },
};

app.get("/", (req, res) => {
    res.set("Content-Type", "application/json");
    res.send({ label: "Babu-API is the best meme API" });
});

app.get("/api/list/", (req, res) => {
    res.set("Content-Type", "application/json");
    res.send(messages["listOfEndpoints"]);
});

app.get("/api/:endpoint", async (req, res) => {
    res.set("Content-Type", "application/json");

    const { endpoint } = req.params;
    const { image: url, text, int } = req.query;

    if (endpoint in modules == false) {
        return res.send(messages["endpointError"]);
    }

    const output = await modules[endpoint].createImage({ url, text, int });

    if (Buffer.isBuffer(output)) {
        res.set("Content-Type", "image/png");
        res.send(Buffer.from(output));
    } else {
        res.send(messages[output]);
    }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
