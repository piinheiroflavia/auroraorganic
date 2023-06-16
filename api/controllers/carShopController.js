const express = require("express");
const CarShop = require("../db/models/carShop");
const Produto = require("../db/models/produtos");
const router = express.Router();

// Recupera os detalhes do produto
router.get("/produto/:id", async (req, res) => {
  try {
    const produtoId = req.params.id;

    // Consulta o produto no banco de dados
    const produto = await Produto.findByPk(produtoId);

    if (!produto) {
      console.log("Produto não encontrado");
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    console.log("Detalhes do produto:", produto);
    res.status(200).json(produto);
  } catch (error) {
    console.error("Erro ao recuperar os detalhes do produto:", error);
    res
      .status(500)
      .json({ error: "Erro ao recuperar os detalhes do produto" });
  }
});

// Adiciona o produto ao carrinho
router.post("/enviar-carrinho", async (req, res) => {
  try {
    const { id_cliente, id_produto, quantidade } = req.body;

    // Consulta o produto no banco de dados para obter o preço unitário
    const produto = await Produto.findByPk(id_produto);

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

    await CarShop.destroy({ where: { id_carrinho: carrinhoId } });

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
