const express = require('express')
const dns = require('dns')

const app = express()

app.get('/', (req, res) => {
  const {
    query: { domain = '' }
  } = req

  if (domain) {
    dns.resolve(domain, 'A', (er, records) => {
      if (er) console.error(er)
      res.json(records)
    });
  } else {
    res.status(200).send('Add a url param "domain"')
  }
});

app.listen(8080, () => {
  console.log(`* listening`)
});
