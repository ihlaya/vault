import express from 'express';
import Vault from 'node-vault';

const vault = Vault({
  endpoint: 'http://127.0.0.1:8200',
  token: 'hvs.hZBIwArghEllRRaHmPkFjFse', // optional client token; can be fetched after valid initialization of the server
});

const app = express();
app.set('trust proxy', true);
app.listen(5050, () => {
  console.log('Server started on port 5050');
});

app.get('/', async (req, res) => {
  try {
    const ip = req.ip;
    // init vault server
    vault.read('kv/data/test').then((data) => {
      res.send({ ...data.data.data, ip });
    });
  } catch (error) {
    res.send(error);
  }
});
