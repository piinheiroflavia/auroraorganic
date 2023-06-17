const express = require("express");
const db = require("../db/models");
const CarShop = db.carShop;
const router = express.Router();
const Produto = db.produtos;

// const Produtos = require("../db/models/produtos");
// const Cliente = require("../db/models/cliente")


  
// Retorna a lista de produtos no carrinho
router.get("/", async (req, res) => {
  try {
    const produtosCarrinho = await CarShop.findAll({
      include: [{ model: Produto, as: "produto" }], // Inclui o modelo Produto na consulta
    });

    const listaProdutos = produtosCarrinho.map((item) => ({
      id_carrinho: item.id_carrinho,
      id_produto: item.id_produto,
      quantidade: item.quantidade,
      valor_total: item.valor_total,
      produto: {
        id_produto: item.produto.id_produto,
        name_produto: item.produto.name_produto,
        Preco: item.produto.Preco,
        novoPreco: item.produto.novoPreco,
        imageSrc: item.produto.imageSrc,
        imageAlt: item.produto.imageAlt,
        categoria: item.produto.categoria,
      },
    }));

    res.status(200).json(listaProdutos);
  } catch (error) {
    console.error("Erro ao obter a lista de produtos do carrinho:", error);
    res.status(500).json({ error: "Erro ao obter a lista de produtos do carrinho" });
  }
});

// Adiciona o produto ao carrinho
router.post("/enviar-carrinho", async (req, res) => {
  try {
    const { id_cliente, id_produto, quantidade } = req.body;
    console.log("Dados recebidos do corpo da requisição:", id_cliente, id_produto, quantidade);

    // Consulta o produto no banco de dados para obter o preço unitário
    const produto = await db.produtos.findOne({ where: { id_produto: id_produto } });


    if (!produto) {
      console.log("Produto não encontrado");
      return res.status(404).json({ error: "Produto não encontrado" });
    }
    const valor_total = produto.Preco * quantidade;
    const novoCarrinho = await CarShop.create({
      id_cliente,
      id_produto,
      quantidade,
      valor_total,
    });
    console.log("Produto adicionado ao carrinho:", novoCarrinho);
    res.status(201).json(novoCarrinho);
  } catch (error) {
    console.error("Erro ao adicionar o produto ao carrinho:", error);
    res.status(500).json({ error: "Erro ao adicionar o produto ao carrinho" });
  }
});


// Remove o produto do carrinho
router.delete("/remover-carrinho/:id", async (req, res) => {
  try {
    const carrinhoId = req.params.id;
    await CarShop.destroy({ where: { id: carrinhoId } });
    console.log("Produto removido do carrinho com sucesso");
    res
      .status(200)
      .json({ message: "Produto removido do carrinho com sucesso" });
  } catch (error) {
    console.error("Erro ao remover o produto do carrinho:", error);
    res
      .status(500)
      .json({ error: "Erro ao remover o produto do carrinho" });
  }
});
module.exports = router;