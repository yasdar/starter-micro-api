import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('>Yo!');
    res.end();
});
const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:8080"
    }
  });
  
  httpServer.listen(process.env.PORT || 3000);

io.on("connection", (socket) => {
  console.log("connetion now");


 setTimeout(() => {
  socket.emit('gameStatus', {gameStatus:100});
 }, 10000);



});
