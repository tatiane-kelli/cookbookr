const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const pool = new Pool();

const runMigrations = async () => {
  try {
    const migrationSQL = fs.readFileSync(path.join(__dirname, 'migrations.sql'), 'utf-8');
    await pool.query(migrationSQL);
    console.log('Tabelas criadas com sucesso!');
  } catch (error) {
    console.error('Erro ao criar tabelas:', error);
  } finally {
    pool.end();
  }
};

runMigrations();
