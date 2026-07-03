const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

console.log("Application Configuration");

console.log("PORT:", process.env.PORT);

console.log("MYSQL HOST:", process.env.MYSQL_HOST);

console.log("MYSQL PORT:", process.env.MYSQL_PORT);

console.log("REDIS HOST:", process.env.REDIS_HOST);

console.log("REDIS PORT:", process.env.REDIS_PORT);

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