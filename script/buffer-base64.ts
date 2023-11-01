const fs = require("fs");
const base64 =
  "data:image/png;base64,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";
const fileBuffer = Buffer.from(base64, "base64");
fs.writeFile(
  "image.svg",
  fileBuffer,
  {
    encoding: "utf8",
  },
  function (err) {
    if (err) {
      return console.error(err);
    }
    console.log("数据写入成功！");
  }
);
