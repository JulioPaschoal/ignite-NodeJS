import http from "node:http";
import { Transform } from "node:stream";

class inverseNumberStream extends Transform {}

const PORT = 3334;
const server = http.createServer(async (req, res) => {
  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  const fullStreamContent = Buffer.concat(buffers).toString("utf-8");
  console.log(fullStreamContent);
  return res.end(fullStreamContent);
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
