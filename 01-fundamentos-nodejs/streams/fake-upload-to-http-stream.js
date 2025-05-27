import { Readable } from "stream";

class OneToHundredStream extends Readable {
  index = 1;
  _read() {
    const i = this.index++;
    const isEnd = i > 5;

    setTimeout(() => {
      if (isEnd) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i));
        this.push(buf);
      }
    }, 1000);
  }
}

fetch("http://localhost:3334", {
  method: "POST",
  body: new OneToHundredStream(),
}).then((resp) => {
  resp.text().then((data) => {
    console.log(data);
  });
});
