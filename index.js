var express = require('express');
var app = express();
var cors = require('cors')

const corsConfig = {
  credentials: true,
  origin: true,
};

app.use(cors(corsConfig));

const SSE_RESPONSE_HEADER = {
  'Connection': 'keep-alive',
  'Content-Type': 'text/event-stream',
  'Cache-Control': 'no-cache',
  'X-Accel-Buffering': 'no'
};
const rumberInRange = (max, min) => Math.random() * (min - max + 1) + max


app.get('/v1/devices/:id/dataStream', (req, res) => {
  res.writeHead(200, SSE_RESPONSE_HEADER);

  let intervalId = setInterval(() => {
  const id = Math.floor(Math.random() * 11);

    data = [
      {
        "propertyId": `12f5-d45g-54s6-f851${id}`,
        "timestamp": new Date(),
        "dataType": "image_matrix",
        "name": `Property ${id}`,
        "metadata": {},
        "value": rumberInRange(-2, 100).toFixed(2)
      },
    ]
    if (!data) res.write(`:\n\n`);
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  }, Math.floor(Math.random() * 11) * 1000);

  req.on("close", function() {
    console.log(`Close.`);
    clearInterval(intervalId);
  });

  req.on("end", function() {
    lconsole.log("end connection")
  });
});

app.listen(8080, function() {
  console.log('Example app listening on port 8080!');
});