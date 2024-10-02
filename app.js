import express from "express";

const app = express();

app.get("/video", (req, res) => {
  const ranges = req.range(500000);

  if (ranges) {
    const start = ranges[0].start;
    const end = ranges[0].end;
    const contentLength = end - start + 1;

    res.writeHead(206, {
      "content-range": `bytes ${start}-${end}/${fileSize}`,
      "accept-ranges": "bytes",
      "content-length": contentLength,
      "Content-Type": "video/mp4",
    });

    const fileStream = fs.createReadStream();
  }
});
