const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const cors = require("cors");

const port = process.env.PORT || 8080;

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

io.on("connection", (socket) => {
  socket.on("message", (data) => {
    io.emit("send", data);
  });
});

app.get("/", (req, res) => res.render("index.html"));

http.listen(port, () =>
  console.log(`Server Started, Listening on PORT: ${port}`)
);
