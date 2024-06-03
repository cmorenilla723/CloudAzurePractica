const express = require('express');
const app = express();

const port = process.env.PORT || 3000; // Usa el puerto del entorno o el puerto 3000 por defecto

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
