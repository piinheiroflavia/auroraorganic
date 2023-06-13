const express = require ("express");
const produtoArom = require("../db/models/produtoArom");
const router = express.Router();

// Rota para listar todos os produtos
router.get("/", async (req, res) => {

    try {
        const listaProdutos = await produtoArom.findAll();
        res.json(listaProdutos);
    } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
        res.status(500).json({ error: 'Erro ao buscar os produtos' });
    }
});

module.exports = router;
