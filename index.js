const express = require('express');
const dns = require('dns');

const app = express();

app.get('/', (req, res) => {
  const {
    query: { domain = '' }
  } = req;

  dns.resolve(domain, 'A', (er, records) => {
    if (er) {
      console.error(er);
    }
    res.json(records);
  });
});

app.listen(8080, () => {
  console.log(`* listening`);
});
