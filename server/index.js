import express from "express";
const app = express();
const port = 3001;

import bodyParser from "body-parser";
app.use(bodyParser.json());

import cookieParser from "cookie-parser";
app.use(cookieParser());

import cors from "cors";
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));

import session from "express-session";
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: "very secret 12345",
    cookie: {
      secure: false,
    },
  })
);

import { login } from "./db.js";

app.get("/sessions", (req, res) => {
  console.log(req.session.logged);
  if (req.session.logged) {
    res.status(200).json({ username: req.session.username });
  } else {
    res.status(401).json({ msg: "User did not log in" });
    // req.session = null;
  }
});

app.post("/sessions", async (req, res) => {
  const [exists, _] = await login(req.body.username, req.body.password);
  if (exists) {
    req.session.logged = true;
    req.session.username = req.body.username;
    res.json({ msg: "logged in", sessionID: req.sessionID });
  } else {
    /*  req.session.logged = null;
    req.session.username = null; */
    res.status(401).json({ msg: "Username or password not found" });
  }
});
app.delete("/sessions", async (req, res) => {
  if (exists) {
    req.session.logged = false;
    req.session.username = null;
    res.json({ msg: "not logged in", sessionID: req.null });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
