const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http); // Socket.io

app.get("/:user", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function (socket) {
  console.log("a user connected");
  socket.on("chat-message", function (msg) {
    console.log(msg);
    io.emit("chat-message", msg);
  });
});

http.listen(3000, function () {
  console.log("listening on port:3000");
});
