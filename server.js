// Servidor estático opcional para probar localmente o desplegar en Node.
const http = require("http");
const fs = require("fs");
const path = require("path");
const root = __dirname;
const mime = {
  ".html":"text/html; charset=utf-8", ".js":"text/javascript; charset=utf-8",
  ".webmanifest":"application/manifest+json", ".json":"application/json",
  ".css":"text/css; charset=utf-8", ".svg":"image/svg+xml",
  ".jpg":"image/jpeg", ".jpeg":"image/jpeg", ".png":"image/png",
  ".webp":"image/webp", ".mp4":"video/mp4"
};
http.createServer((req,res) => {
  let pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  if (pathname.endsWith("/")) pathname += "index.html";
  const file = path.resolve(root, "." + pathname);
  if (!file.startsWith(root + path.sep) && file !== path.join(root,"index.html")) {
    res.writeHead(403); return res.end("Forbidden");
  }
  fs.readFile(file,(err,data) => {
    if (err) { res.writeHead(404,{"Content-Type":"text/plain; charset=utf-8"}); return res.end("Archivo no encontrado"); }
    res.writeHead(200,{"Content-Type":mime[path.extname(file).toLowerCase()] || "application/octet-stream",
      "X-Content-Type-Options":"nosniff"});
    res.end(data);
  });
}).listen(process.env.PORT || 3000, () => console.log("JACK y Números: http://localhost:"+(process.env.PORT || 3000)));
