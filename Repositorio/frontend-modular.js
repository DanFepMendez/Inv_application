// Servidor frontend para servir los módulos
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

// Redirección raíz a inventarios
app.get('/', (req, res) => {
  res.redirect('/inventarios/index.html');
});

app.listen(PORT, () => {
  console.log(`Frontend modular escuchando en http://localhost:${PORT}`);
});
