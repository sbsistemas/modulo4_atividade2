import  express from 'express'
import  request from 'supertest';
import app from '../src/app.js';

const app = express();

app.use(express.json());

test('Servidor na porta 5678', async () => {

  const resposta = await request(app).get('/');

  expect(resposta.status).toBe(200);
});
