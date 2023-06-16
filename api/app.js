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


// Importar o controller
const cadastro = require("./controllers/cadastro.js");
const login = require("./controllers/login.js");
const productController = require("./controllers/productController.js");
const carShopController = require("./controllers/carShopController.js");


//passa o endpoint
app.use('/cadastro', cadastro);
app.use('/login', login);
app.use("/produtos", productController);
// o parâmetro :id nas rotas /carrinho/produto/:id e carrinho/remover-carrinho/:id
// indica um valor dinâmico que pode ser acessado no controlador através do objeto req.params.id
app.use("/carrinho/produto/:id", carShopController);
app.use("/carrinho/enviar-carrinho", carShopController);
app.use("/carrinho/remover-carrinho/:id", carShopController);


app.listen(9080, () => {
  console.log("Servidor iniciado na porta 9080: http://localhost:9080");
});
