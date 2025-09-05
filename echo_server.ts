import * as net from "net";

function newConn(socket: net.Socket): void {
  console.log("New connection: ", socket.remoteAddress, socket.remotePort);

  // close connection
  socket.on("end", () => {
    console.log("End Of File.");
  });

  socket.on("data", (data: Buffer) => {
    console.log("data", data);
    socket.write(data); // echoing back the data
  });
}

let server = net.createServer();
server.on("connection", newConn);

server.listen({ host: "127.0.0.1", port: 1234 });
