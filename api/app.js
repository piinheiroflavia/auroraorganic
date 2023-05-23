const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());

app.use(cors())

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const cadastro = require("./controllers/cadastro.js");

app.use('/cadastro', cadastro);

app.listen(9080, () => {
  console.log("Servidor iniciado na porta 9080: http://localhost:9080");
});
