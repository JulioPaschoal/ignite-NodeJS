import http from "node:http";
import { json } from "./middlewares/json.js";
import { routes } from "./routes.js";

const PORT = 3000;
const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  const route = routes.find((route) => {
    return route.method === method && route.path === url;
  });

  if (route) {
    return route.handler(req, res);
  }

  return res.end(404).end();
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
