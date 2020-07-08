const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const cors = require("cors");
const bingo = require("./utils/bingo");
const authService = require("./utils/auth");

const port = process.env.PORT || 8080;

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const method = {
  checkPoc: (data) => authService.checkPoc(data),
};

io.on("connection", (socket) => {
  let number = 5;
  let maxNum = 100;
  let bingoFinish = 3;

  let board = bingo.MakeBingo2(number, maxNum, false);
  socket.on("packet", (data) => {
    socket.emit("packet", {
      cmd: data.cmd,
      trid: data.trid,
      res: method[data.cmd](data),
    });
  });
  // socket.emit(
  //   "makeBingo",
  //   {
  //     board,
  //     count: number,
  //     bingoFinish,
  //   },
  //   bingo.lineBingo(board)
  // );

  // socket.broadcast.emit("bingoNumber");
});

// app.get("/", (req, res) => res.render("index.html"));

http.listen(port, () =>
  console.log(`Server Started, Listening on PORT: ${port}`)
);
