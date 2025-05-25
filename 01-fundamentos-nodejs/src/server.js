import http from "node:http";

const users = [];

const PORT = 3000;
const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify(users));
  }
  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "Julio Paschoal",
      email: "juliocpaschoal@gmail.com",
    });
    return res.end("User created");
  }
  return res.end("Hello World");
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
