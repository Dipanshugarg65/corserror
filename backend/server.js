const express = require("express");
const { chats } = require("./data/data");
const dotenv = require ("dotenv")
const app = express();
dotenv.config();

app.get("/", (req, res) => {
    res.send("API is Running Succesfully");
});

app.get("/api/chat", (req, res) => {
    res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
    console.log(req.params.id);
});


const PORT = process.env.PORT || 6000
app.listen(6000, console.log(`Server Started on PORT ${PORT}`));