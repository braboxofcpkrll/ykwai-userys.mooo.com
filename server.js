const express = require("express");
const app = express();

// Rota que redireciona
app.get("/u/knownbyall/KpfGwXr", (req, res) => {
  console.log("Acesso recebido de:", req.ip); // log técnico normal
  res.redirect("https://k.kwai.com/u/@knownbyall/wPdCXpu8");
});

// Rota raiz opcional
app.get("/", (req, res) => {
  res.send("Servidor funcionando!");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
