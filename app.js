require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { db } = require('./db/database');
const { readdirSync } = require('fs');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

readdirSync('./routes').map((route) =>
  app.use('/api/v1/', require('./routes/' + route))
);

app.get('/', (req, res) => {
  res.send('Hello!');
});

const server = () => {
  db();
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

server();
