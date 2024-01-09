// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const activosRoutes = require('./src/routes/activosRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api', activosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
