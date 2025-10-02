import express from 'express';
import fs from 'fs';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = 3001;
const DB_FILE = './src/services/db.json';

app.use(cors());
app.use(express.json());


function readDB() {
  const data = fs.readFileSync(DB_FILE, 'utf-8');
  return JSON.parse(data);
}


function writeDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
}


app.get('/usuarios', (req, res) => {
  try {
    const db = readDB();
    res.json(db.usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error reading database' });
  }
});


app.post('/usuarios', (req, res) => {
  try {
    const newUser = req.body;
    if (!newUser.correo || !newUser.nombreCompleto || !newUser.usuario || !newUser.clave) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }
    const db = readDB();
    newUser.id = uuidv4().slice(0, 4); 
    db.usuarios.push(newUser);
    writeDB(db);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error saving user' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
