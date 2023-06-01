const express = require("express");
const db = require("../db/models");
const router = express.Router();




router.post("/", async (req, res) => {
  const {  email_cliente, senha_cliente1 } = req.body;
  console.log("Email recebido:", email_cliente);
  console.log("Senha recebida:", senha_cliente1);

  try {
    // Verifique se o usuário com o email fornecido existe no banco de dados
    const usuario = await db.cliente.findOne({ where:{email_cliente}});
    if (!usuario) {
      return res.json({
        error: true,
        message: "Usuário Não Encontrado.",
      });
    }

    // Verifique se a senha fornecida coincide com a senha armazenada no banco de dados
     if (usuario.senha_cliente != senha_cliente1) {
      return res.json({
        error: true,
        message: "Senha Incorreta.",
      });
    }


    // Se a autenticação for bem-sucedida, você pode retornar uma resposta com sucesso
    return res.json({
      error: false,
      message: "Seja Bem vindo, boas compras!",
      data: usuario,
    });
  } catch (error) {
    return res.json({
      error: true,
      message: "Erro ao Realizar o Login.",
      data: error,
    });
  }
});

module.exports = router;
