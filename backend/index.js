const express = require('express');
const db = require('./config');

const app = express();
app.use(express.json());

app.get('/recipes', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM recipe');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/recipes/search', async (req, res) => {
  const { name } = req.query;
  try {
    const result = await db.query('SELECT * FROM recipe WHERE name ILIKE $1', [`%${name}%`]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/categories', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM category');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
