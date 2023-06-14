const express = require ("express");
const product = require ("../db/models/product");
const router = express.Router();

// Rota para listar todos os produtos
router.get("/", async (req, res) => {

    try {
        const listaProdutos = await product.findAll();
        res.json(listaProdutos);
    } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
        res.status(500).json({ error: 'Erro ao buscar os produtos' });
    }
});

module.exports = router;