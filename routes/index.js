import { Router } from "express";
import messages, { colors } from "../models/fakeDatabase.js";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.render("index", { messages: messages });
});

indexRouter.get("/new", (req, res) => {
    res.render("form");
});

indexRouter.post("/new", (req, res) => {
    let { username, message } = req.body;
    let firstChar = username[0].toUpperCase();
    let newUsername = firstChar + username.slice(1);
    const newMessage = {
        text: message,
        user: newUsername,
        added: new Date(),
        color: colors[Math.floor(Math.random() * colors.length)],
    };
    messages.push(newMessage);
    res.redirect("/");
});

export default indexRouter;
