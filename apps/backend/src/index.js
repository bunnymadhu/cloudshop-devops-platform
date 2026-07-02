const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        project: "CloudShop",
        service: "Backend API",
        version: "v1",
        status: "Running"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        timestamp: new Date()
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});